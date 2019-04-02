import React, { Component } from 'react'
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import getMuiTheme from "@material-ui/core/"
import AppBar from "@material-ui/core/AppBar"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();

        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();

        this.props.prevStep();
    }

  render() {

    const {values, handleChange} = this.props;

    return (
      
          <React.Fragment>
              <AppBar style={styles.appBar} title="Enter personal detail" position="static" color="default">
               
             </AppBar>

              <TextField 
                    placeholder="Enter your occupation"
                    
                    onChange={handleChange("occupation")}
                    defaultValue={values.occupation}
                    style={styles.textField}
                />

                <br/>
                <TextField 
                    placeholder="Enter your city"
                    
                    onChange={handleChange("city")}
                    defaultValue={values.city}
                    style={styles.textField}
                />
                <br/>
                <TextField 
                    placeholder="Enter your bio"
                    
                    onChange={handleChange("bio")}
                    defaultValue={values.bio}
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

export default FormPersonalDetails
