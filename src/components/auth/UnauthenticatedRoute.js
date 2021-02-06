import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

function querystring(name, url = window.location.href) {
    name = name.replace(/[[]]/g, "\\$&");

    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
    const results = regex.exec(url);

    if (!results) {
        return null;
    }
    if (!results[2]) {
        return "";
    }

    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const UnauthenticatedRoute = ({ children, ...props }) => {


    const redirect = querystring("redirect")

    return (
        <Route {...props}>
            {!props.isAuthenticated ? (
                children
            ) : (
                <Redirect to={redirect === "" || redirect === null ? "/dashboard" : redirect} />
                )}
        </Route>
    )
}



const mapStateToProps = (state) => {
    
        return {
            isAuthenticated: state.auth.isAuthenticated,
        }
    
}

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(UnauthenticatedRoute)
