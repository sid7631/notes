import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import {WithLoading} from '../../helper/WithLoading';

const HomePage = (props) => {

    console.log(props.isAuthenticated)

    if(props.isAuthenticated && !props.loading){
        return (
            <Redirect to='./dashboard' />
        )
    }else {if(props.loading) {
        return (
            <Loading message={'Loading...'} />
        )
    }
    return (
        <div>
            homepage s
        </div>
    )}


    

}

const mapStateToProps = (state) => ({
    isAuthenticated:state.auth.isAuthenticated,
    loading:state.auth.loading
})

const mapDispatchToProps = {
    
}

export default WithLoading(connect(mapStateToProps, mapDispatchToProps)(HomePage))
