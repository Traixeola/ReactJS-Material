import React, { Component } from 'react'
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import getMuiTheme from "@material-ui/core/"
import AppBar from "@material-ui/core/AppBar"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();

        this.props.nextStep();
    }

  render() {

    const {values, handleChange} = this.props;

    return (
      
          <React.Fragment>
              <AppBar style={styles.appBar} title="Hello" position="static" color="default">
               
             </AppBar>

              <TextField 
                    placeholder="Enter your first name"
                    
                    onChange={handleChange("firstName")}
                    defaultValue={values.firstName}
                    style={styles.textField}
                />
                <br/>
                <TextField 
                    placeholder="Enter your last name"
                    
                    onChange={handleChange("lastName")}
                    defaultValue={values.lastName}
                    style={styles.textField}
                />
                <br/>
                <TextField 
                    placeholder="Enter your email"
                    
                    onChange={handleChange("email")}
                    defaultValue={values.email}
                    style={styles.textField}
                />
                <br/>

                <Button 
                 variant="contained"
                color="primary"
                onClick={this.continue}
                style={styles.button}
                >
                    Next
                </Button>
          </React.Fragment>
      
    )
  }
}

const styles = {
    button:{
        margin:15
    },
    textField:{
        margin:15
    },
    appBar:{
        height:60
    }
}

export default FormUserDetails
