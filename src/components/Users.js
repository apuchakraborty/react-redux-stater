import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { deleteUser } from '.././actions/userActions'

class Users extends Component {
  state = {
  };

  onDeleteClick = id => {
    //// DELETE CONTACT ////
   /// console.log(123)
   this.props.deleteUser(id);
  };

  render() {
    const { id, name, email, phone } = this.props.users;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{' '}
          
          <i
            className="fas fa-trash"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
            onClick={this.onDeleteClick.bind(this, id)}
          />
          <Link to={`user/edit/${id}`}>
            <i
              className="fas fa-pencil"
              style={{
                cursor: 'pointer',
                float: 'right',
                color: 'black',
                marginRight: '1rem'
              }}
            />
          </Link>
        </h4>

        <p>Email: {email}</p>
        <p>Phone: {phone} </p>

         
    
      </div>
    );
  }
}

Users.propTypes = {
  user: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired
};

export default connect(null, {deleteUser})(Users);
