import React, { useRef } from 'react';
import {  Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { userSignUp } from '../../../store/actions';

import { FormControl, InputLabel, Input, FormHelperText, FormGroup, Button, Card, CardContent } from '@material-ui/core';

function SignUp(props) {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()

        props.userSignUp(emailRef.current.value, passwordRef.current.value, true)

    }



    return (
        <Container className="d-flex align-items-center justify-content-center"
            style={{ minHeight: '100vh' }}>
            <div className="w-100" style={{ maxWidth: '400px' }}>
                <Card variant="outlined">
                    <CardContent>
                        <h2 className="text-center mb-4">Sign Up</h2>
                        <FormGroup>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Email address</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" ref={emailRef} required />
                                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Password</InputLabel>
                                <Input type="password" id="my-input" aria-describedby="my-helper-text" ref={passwordRef} required />
                                <FormHelperText id="my-helper-text">Enter password of length 8.</FormHelperText>
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Confirm Password</InputLabel>
                                <Input type="password" id="my-input" aria-describedby="my-helper-text" ref={passwordConfirmRef} required />
                                <FormHelperText id="my-helper-text">Confirm password</FormHelperText>
                            </FormControl>
                            {/* <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required></Form.Control>
                            </Form.Group> */}
                            {/* <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required></Form.Control>
                            </Form.Group> */}
                            {/* <Form.Group id="password-confirm">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
                            </Form.Group> */}
                            <Button variant="contained" color="primary" className="w-100" type="submit" onClick={handleSubmit}>Sign Up</Button>
                        </FormGroup>
                    </CardContent>
                </Card>
                <div className="w-100 text-center mt-2">
                    Already have an account? Log In
                </div>
            </div>
        </Container>
    )
}


const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
    }
}

const mapDispatchToProps = {
    userSignUp
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
