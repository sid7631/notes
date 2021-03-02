import React, { useState } from 'react';
import {  Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { userSignIn } from '../../../store/actions';

import { FormControl, InputLabel, Input, FormHelperText, FormGroup, Button, Card, CardContent, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

function SignIn(props) {

    const initialHelperText = {email:"We'll never share your email",password:'Enter password of length 8.'};

    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)
    const [helperText, sethelperText] = useState(initialHelperText)

    async function handleSubmit(e) {
        e.preventDefault()
        try{
            await props.userSignIn(email, password)
        } catch (error) {
            console.log(error)
        }    
    }




    return (
        <Container className="d-flex align-items-center justify-content-center"
            style={{ minHeight: '100vh' }}>
            <div className="w-100" style={{ maxWidth: '400px' }}>
                <Paper>
                    <CardContent>
                        <h2 className="text-center mb-4">Sign In</h2>
                        <form onSubmit={handleSubmit}>
                        <FormGroup>
                            <FormControl className="my-2">
                                <InputLabel htmlFor="my-input">Email address</InputLabel>
                                <Input 
                                    id="my-input" 
                                    type="email"
                                    aria-describedby="my-input-text"  
                                    onChange={e => setemail(e.target.value)}
                                    required />
                                <FormHelperText id="my-input-text">{helperText['email']}</FormHelperText>
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Password</InputLabel>
                                <Input 
                                    type="password" 
                                    id="my-password" 
                                    aria-describedby="my-password-text" 
                                    onChange={e => setpassword(e.target.value)}
                                    required />
                                <FormHelperText id="my-password-text">{helperText['password']}</FormHelperText>
                            </FormControl>
                            <Button variant="contained" color="primary" className="w-100 mt-2" type="submit" >Sign In</Button>
                        </FormGroup>
                        </form>
                    </CardContent>
                </Paper>
                <div className="w-100 text-center mt-2">
                    Not a member? <Link to={'/sign-up'}>Sign Up</Link>
                </div>
            </div>
        </Container>
    )
}


const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        loading: state.auth.loading,
    }
}

const mapDispatchToProps = {
    userSignIn
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
