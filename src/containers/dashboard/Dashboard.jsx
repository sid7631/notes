import { Button } from '@material-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import { useHistory} from 'react-router-dom';
import { userSignOut } from '../../store/actions';

const Dashboard = (props) => {

    const history = useHistory()



    async function handleLogout() {
        await props.userSignOut(function(){history.push('/sign-in')});

    }

    return (
        <div>
            <Button onClick={handleLogout}>Sign Out</Button>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        loading:state.auth.loading,
    }
}

const mapDispatchToProps = {
    userSignOut
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
