import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { userSignUp } from '../../../store/actions';

import { FormControl, InputLabel, Input, FormHelperText, FormGroup, Button, Card, CardContent, Paper } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

function SignUp(props) {

    const initialHelperText = {email:"We'll never share your email",password:'Enter password of length 8.',passwordMatch:'Re-enter Password'};
    
    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)
    const [confirmPassword, setconfirmPassword] = useState(null)
    const [helperText, sethelperText] = useState(initialHelperText)
    const [isValid, setisValid] = useState({ email: false, password: false, passwordMatch: false })

    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        props.userSignUp(email, password, true, function () { history.push('/') })
    }

    function handleValidation() {

    }

    function handleEmail(e) {
        setisValid({...isValid,['email']:e.target.validity.valid});
    }
    function handlePassword(e) {
        setisValid({...isValid,['password']:e.target.validity.valid})
    }
    function handleConfirmPassowrd(e) {
        setisValid({...isValid,['passwordMatch']:e.target.validity.valid})
    }




    return (
        <Container className="d-flex align-items-center justify-content-center"
            style={{ minHeight: '100vh' }}>
            <div className="w-100" style={{ maxWidth: '400px' }}>
                <Paper >
                    <CardContent>
                        <h2 className="text-center mb-4">Sign Up</h2>
                        <form onSubmit={handleSubmit}>
                            <FormGroup>
                                <FormControl className="my-2">
                                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                                    <Input
                                    
                                        type="email"
                                        id="my-input"
                                        aria-describedby="my-input-text"
                                        onChange={e => setemail(e.target.value)}
                                        onBlur={handleEmail}
                                        error={false}
                                        required />
                                    <FormHelperText id="my-input-text">{helperText['email']}</FormHelperText>
                                </FormControl>
                                <FormControl>
                                    <InputLabel htmlFor="my-password">Password</InputLabel>
                                    <Input
                                        type="password"
                                        id="my-password"
                                        aria-describedby="my-password-text"
                                        onChange={e => setpassword(e.target.value)}
                                        onBlur={handlePassword}
                                        inputProps={{
                                            minLength:8
                                        }}
                                        required />
                                    <FormHelperText id="my-password-text">{helperText['password']}</FormHelperText>
                                </FormControl>
                                <FormControl>
                                    <InputLabel htmlFor="my-confirm-password">Confirm Password</InputLabel>
                                    <Input
                                        type="password"
                                        id="my-confirm-password"
                                        aria-describedby="my-confirm-password-text"
                                        onChange={e => setconfirmPassword(e.target.value)}
                                        onBlur={handleConfirmPassowrd}
                                        minLength={8}
                                        required />
                                    <FormHelperText id="my-confirm-password-text">{helperText['passwordMatch']}</FormHelperText>
                                </FormControl>
                                <Button variant="contained" color="primary" className="w-100 mt-2" type="submit" >Sign Up</Button>
                            </FormGroup>
                        </form>
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
