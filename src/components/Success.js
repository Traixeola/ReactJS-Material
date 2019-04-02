import React, { Component } from 'react'
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import getMuiTheme, { ListItemText } from "@material-ui/core/"
import AppBar from "@material-ui/core/AppBar"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {List, ListItem} from "@material-ui/core/"

export class Success extends Component {

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
    return (
      
          <React.Fragment>
              <AppBar style={styles.appBar} title="Confirm User Data" position="static" color="default">
               
             </AppBar>
             
            <h1>Thank you for your submission</h1>
            <p>You will get an email with further instructions</p>
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


export default Success
