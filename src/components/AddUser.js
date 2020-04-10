import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {connect } from 'react-redux'
import { addUser } from '.././actions/userActions'

 
class AddUser extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // Check For Errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }


    const newUser = {
      name,
      email,
      phone
    };

    //// SUBMIT CONTACT ////

    this.props.addUser(newUser);

    // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <input
              label="Name"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <br />

            <input
              label="Email"
              name="email"
              className="form-control"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />
            <br />

            <input
              label="Phone"
              name="phone"
              className="form-control"
              placeholder="Enter Phone"
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />
            <br />
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-dark "
            />
          </form>
        </div>
      </div>
    );
  }
}

AddUser.propTypes = {
  addUser: PropTypes.func.isRequired
}

export default connect(null, {addUser})(AddUser);
