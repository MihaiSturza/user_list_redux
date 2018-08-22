import React, { Component } from 'react';
import './App.css';
import UserList from './components/UserList';
import Button from '@material-ui/core/Button';



class App extends Component {
  render() {
    return(
      <div className="app">
            <div className="header">
                <div className="title">List</div>
                <Button variant="extendedFab" 
                       area-label="Add" 
                       className="add-btn"
                       mini
                       onClick={() => this.props.history.push('/add-user')} 
                       >
                    <i className="material-icons">person_add</i>
                </Button>
            </div>
        <UserList history={this.props.history}/>
      </div>
    );

  }
}

export default App;
