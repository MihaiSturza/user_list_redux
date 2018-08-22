import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { connect } from 'react-redux';
import { deleteUser } from '../actions';


class ViewUser extends Component {


    onDelete() {
        this.props.deleteUser(this.props.match.params.id);
        this.props.history.push('/');
    }


    onViewEdit() {
        this.props.history.push(`/user/${this.props.match.params.id}/edit`);
    }

    render() {
        console.log('viewuser: ', this.props);
        return (
            this.props.name !== undefined ?
                <div className="app">
                    <div className="modal-btn-back">
                        <Button variant="fab" 
                        area-label="Cancel" 
                        mini
                        onClick={() => this.props.history.push('/')} 
                        >
                        <i className="material-icons">keyboard_backspace</i>
                        </Button>
                    </div>
                        <div className="modal-title">User Details</div>
                            <div className="user-details-container">
                            <div className="user-details">Name: {this.props.name}</div>
                            <div className="user-details">Date of Birth: {this.props.dob}</div>
                            <div className="user-details">Phone: {this.props.phone}</div>
                            </div>
                        <div className="contain-modal-btn">
                            <Button variant="extendedFab" 
                                area-label="Cancel" 
                                className="modal-btn-left" 
                                mini
                                onClick={this.onDelete.bind(this)} 
                                >
                                <i className="material-icons">delete</i>
                            </Button>
                            <Button variant="extendedFab" 
                                area-label="Save" 
                                className="modal-btn-right" 
                                mini
                                disabled={false}
                                onClick={this.onViewEdit.bind(this)} 
                                >
                                <Icon>edit_icon</Icon>
                            </Button>
                        </div>
                </div>
                : <div className="app">
                    <div className="user-no-details">
                        On refresh, the values of the current user are lost. Please go back to the initial list.
                    </div>
                    <Button variant="fab" 
                        area-label="Cancel" 
                        mini
                        onClick={() => this.props.history.push('/')} 
                        >
                        <i className="material-icons">keyboard_backspace</i>
                        </Button>
                </div>
        );
    }
}


function mapStateToProps({users}, ownProps) {
    const user = [...users].filter(user => user.id === Number(ownProps.match.params.id)).pop();
    return user ? user : {};
}

export default connect(mapStateToProps, { deleteUser })(ViewUser);