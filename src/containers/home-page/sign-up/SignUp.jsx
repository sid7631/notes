import React, { useState } from 'react';
import {  Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { userSignUp } from '../../../store/actions';

import { FormControl, InputLabel, Input, FormHelperText, FormGroup, Button, Card, CardContent, Paper } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

function SignUp(props) {

    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)
    const [confirmPassword, setconfirmPassword] = useState(null)

    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        props.userSignUp(email, password, true,function(){history.push('/')})
    }




    return (
        <Container className="d-flex align-items-center justify-content-center"
            style={{ minHeight: '100vh' }}>
            <div className="w-100" style={{ maxWidth: '400px' }}>
                <Paper >
                    <CardContent>
                        <h2 className="text-center mb-4">Sign Up</h2>
                        <FormGroup>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Email address</InputLabel>
                                <Input 
                                    id="my-input" 
                                    aria-describedby="my-helper-text"  
                                    onChange={e => setemail(e.target.value)}
                                    required />
                                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Password</InputLabel>
                                <Input 
                                    type="password" 
                                    id="my-input" 
                                    aria-describedby="my-helper-text" 
                                    onChange={e => setpassword(e.target.value)}
                                    required />
                                <FormHelperText id="my-helper-text">Enter password of length 8.</FormHelperText>
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Confirm Password</InputLabel>
                                <Input 
                                    type="password" 
                                    id="my-input" 
                                    aria-describedby="my-helper-text" 
                                    onChange={e => setconfirmPassword(e.target.value)}
                                    required />
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
                            <Button variant="contained" color="primary" className="w-100 mt-2" type="submit" onClick={handleSubmit}>Sign Up</Button>
                        </FormGroup>
                    </CardContent>
                </Paper>
                <div className="w-100 text-center mt-2">
                    Already have an account? <Link to={'/sign-in'}>Sign In</Link>
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
