import { Button } from '@material-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import { Switch, useHistory} from 'react-router-dom';
import AuthenticatedRoute from '../../components/auth/AuthenticatedRoute';
import Sidebar from '../../components/sidebar/Sidebar';
import { userSignOut } from '../../store/actions';
import Notes from './notes/Notes';
import TodoList from './todo/TodoList';

import './Dashboard.scss';

const Dashboard = (props) => {

    const history = useHistory()



    async function handleLogout() {
        await props.userSignOut(function(){history.push('/sign-in')});

    }

    return (
        <div className="content">
            {/* <Button onClick={handleLogout}>Sign Out</Button> */}
            <Switch>
                <AuthenticatedRoute exact path='/dashboard/notes'>
                    <Notes />
                </AuthenticatedRoute>
                <AuthenticatedRoute exact path='/dashboard/todolist'>
                    <TodoList />
                </AuthenticatedRoute>
            </Switch>
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
