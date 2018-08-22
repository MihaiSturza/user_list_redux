import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class UserForm extends Component {

  constructor(props) {
      super(props);
      this.state = (this.props.userId !== undefined) ? this.props.user : {name: '', dob: '', phone: ''};
      console.log(this.props);
  }

    render() {
        return(
            <div>
            <form noValidate autoComplete="off" className="new-form"> 
            <TextField
              id="name"
              label="Name"
              value={this.state.name}
              margin="normal"
              onChange={event =>  this.setState({name: event.target.value})}
            />
            <br/>  
            <TextField
              id="Date of Birth"
              label="Date of Birth"
              type="date"
              margin="normal"
              value={this.state.dob}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={event =>  this.setState({dob: event.target.value})}
            />
            <br/>
            <TextField
              id="Phone"
              label="Phone"
              value={this.state.phone}
              margin="normal"
              onChange={event =>  this.setState({phone: event.target.value})}
            />
            </form>

            <div className="contain-modal-btn">
              <Button variant="extendedFab" 
                area-label="Cancel" 
                className="modal-btn-left" 
                mini
                onClick={this.props.onDiscardChanges} 
                >
                <i className="material-icons">close</i>
              </Button>

              <Button variant="extendedFab" 
                area-label="Save" 
                className="modal-btn-right" 
                mini
                disabled={false}
                onClick={() => this.props.onSubmit(this.state)} 
                >
                <i className="material-icons">check</i>
              </Button>
            </div>

            </div>
        );
    }
}


export default UserForm;