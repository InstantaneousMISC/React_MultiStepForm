import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const {values, handleChange} = this.props;

        return (
            <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title="Enter User Details"></AppBar>
                   <TextField 
                    hintText="Enter your first name" floatingLabelText="First Name" 
                    onChange={handleChange('lastName')} defaultValue={values.firstName}>
                       
                   </TextField>
                   <TextField hintText="Enter your last name" floatingLabelText="last Name" onChange={handleChange('firstName')} defaultValue={values.lastName}>
                       
                   </TextField>
                   <TextField hintText="Enter your email" floatingLabelText="email" onChange={handleChange('email')} 
                   defaultValue={values.email}>
                   </TextField>
                   <br/>
                   <RaisedButton
                        label="Continue"
                        primary={true} 
                        style={styles.button}
                        onClick={this.continue}
                    ></RaisedButton>
               </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails
