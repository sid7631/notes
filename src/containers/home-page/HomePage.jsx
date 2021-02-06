import React from 'react';
import { connect } from 'react-redux';
import { WithLoading } from '../../helper/WithLoading';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';

import './HomePage.scss'

const HomePage = (props) => {

    const history = useHistory()

    return (
        <React.Fragment>
            {props.isAuthenticated ? (
                <Redirect to={"/dashboard"} />
            ) : (
                    <div className="container-fluid">
                        <div className="home-navbar">

                            <div className="d-flex justify-content-between">
                                <div>
                                    <h4>Diary</h4>
                                </div>
                                <div>
                                    <Button onClick={() => history.push('/sign-up')}>Sign Up</Button>
                                    <Button onClick={() => history.push('/sign-in')}>Sign In</Button>
                                </div>

                            </div>
                        </div>
                        <div className="home-body">
                            
                        </div>

                    </div>
                )
            }
        </React.Fragment>



    )


}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading
})

const mapDispatchToProps = {

}

export default WithLoading(connect(mapStateToProps, mapDispatchToProps)(HomePage))
