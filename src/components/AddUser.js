import React, { Component } from 'react';
import UserForm from './UserForm';
import { connect } from 'react-redux';
import { addUser } from '../actions';


class AddUser extends Component {

    onSubmit(user) {
        const {users} = this.props;
        const id = users.length >=1 ? users[users.length - 1].id + 1 : 0;
        const newUser = {id, ...user};
        this.props.addUser(newUser);
        this.props.history.push('/');
      }

      onDiscardChanges() {
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="app">
                <div className="modal-title">Add user to list</div>
                    <UserForm 
                        history={this.props.history}
                        onSubmit={this.onSubmit.bind(this)}
                        onDiscardChanges={this.onDiscardChanges.bind(this)}
                        />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

const mapDispatchToProps = {
    addUser: user => addUser(user) 
  }

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);