import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

class UserList extends Component {
  
    list() {
        return (
            this.props.users.map((user) => 
            <div className="list-style" 
                key={user.id + user.dob} 
                onClick={() => this.props.history.push(`/user/${user.id}`)}
                user={user}>
                <List>
                    <ListItem>
                        <Avatar>
                            <i className="material-icons">account_circle</i>
                        </Avatar>
                        <ListItemText primary={user.name} secondary={user.dob} />
                    </ListItem>
                    <li><Divider inset /></li>
                </List>
            </div>
            )
        ); 
    }

    render() {
        return (<ul className="list-group">{ this.list() }</ul>)
    }
}


function mapStateToProps (state) {
    return state;
}

export default connect(mapStateToProps)(UserList);

