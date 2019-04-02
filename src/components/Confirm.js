import React, { Component } from 'react'
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import getMuiTheme, { ListItemText } from "@material-ui/core/"
import AppBar from "@material-ui/core/AppBar"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {List, ListItem} from "@material-ui/core/"

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        
        // Process form
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();

        this.props.prevStep();
    }

  render() {

    const {values: {firstName, lastName, email, occupation, city, bio}} = this.props;

    return (
      
          <React.Fragment>
              <AppBar style={styles.appBar} title="Confirm User Data" position="static" color="default">
               
             </AppBar>
             
                <List>
                    <ListItem>
                        <ListItemText primary="First Name" secondary={firstName}/>
                    </ListItem>

                    <ListItem>
                        <ListItemText primary="Last Name" secondary={lastName}/>
                    </ListItem>

                    <ListItem>
                        <ListItemText primary="First Name" secondary={firstName}/>
                    </ListItem>

                    <ListItem>
                        <ListItemText primary="Email" secondary={email}/>
                    </ListItem>

                    <ListItem>
                        <ListItemText primary="Occupation" secondary={occupation}/>
                    </ListItem>

                    <ListItem>
                        <ListItemText primary="City" secondary={city}/>
                    </ListItem>

                    <ListItem>
                        <ListItemText primary="Bio" secondary={bio}/>
                    </ListItem>
                </List>

                <Button 
                 variant="contained"
                color="primary"
                onClick={this.continue}
                style={styles.button}
                >
                    Confirm & Continue
                </Button>
                <Button 
                 variant="contained"
                color="false"
                onClick={this.back}
                style={styles.button}
                >
                    Back
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
