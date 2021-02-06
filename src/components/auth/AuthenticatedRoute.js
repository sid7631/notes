import React from 'react'
import { connect } from 'react-redux'
import { useLocation, Route, Redirect } from 'react-router-dom'


const AuthenticatedRoute = ({children, ...props}) => {

    const{ pathname, search } = useLocation()

    return (
        <Route {...props}>
            {props.isAuthenticated?(
                children
            ):(
                <Redirect to={
                    `/sign-in?redirect=${pathname}${search}`
                } />
            )}
        </Route>
    );
}


const mapStateToProps = (state) => {
    return  {
        isAuthenticated: state.auth.isAuthenticated,
    }
}

const mapDispatchToProps = {
    
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedRoute)
