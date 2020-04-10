import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '.././App.css'

import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Users from './Users';
import { GET_USERS } from '../actions/types'

import { getUsers } from '../actions/userActions'



 class Home extends Component {
   
   componentDidMount() {
    this.props.getUsers();
   }
    
    
    render() {
    const { users } = this.props;

        return (
            <div>
            <Link className="btn btn-primary" to="/add"> Add User</Link>
            <hr />
                {users.map(user => (
          <Users key={user.id} users={user} />
        ))}
            </div>


        )
    }
}

Home.propTypes = {
    users: PropTypes.array.isRequired,
    getUsers: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    users: state.user.users
});

// const mapDispatchToProps = (dispatch) => ({
//     getContacts: () => dispatch({type: GET_CONTACTS})
// })

export default connect(mapStateToProps,{getUsers})(Home);