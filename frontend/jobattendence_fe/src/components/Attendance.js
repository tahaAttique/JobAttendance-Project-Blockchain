import React, { Component } from 'react';
import './LoginFormCSS.css';
import {BrowserRouter , Route, withRouter} from 'react-router-dom';

class Attendance extends Component{


    constructor(props)
    {
      super(props);
      this.state={loginedAddress: this.props.loginedAddress, labelEntering:'', labelExiting:''};  
    
    }


    markEnteranceAttendance=()=>{
        if(this.state.loginedAddress !== '')
        {
            this.setState({
                labelEntering:"THANK YOU FOR COMING"
            })
        }
        
    }

    markExitAttendance=()=>{
        if(this.state.loginedAddress !== '')
        {
            this.setState({
                labelExiting:"GOOD BYE"
            })
        }
        
    }
    render(){

        return(
            <div className="container">
                <div className="center-align">
                    <h1 id="textcolorAttendence">Welcome</h1>
                    <h6 id="textcolorAttendence">Address: {this.state.loginedAddress}</h6>
                    <h6>Please Mark Your Attendence</h6>

                    <div className="row"></div>

                    <button  className="waves-effect waves-light btn-large"  
                     onClick={this.markEnteranceAttendance}>Entering</button>

                    <div className="row">
                        <h6 id="textcolorAttendence">{this.state.labelEntering}</h6>
                    </div>
                    
                    <div className="row"></div>

                    <button  className="waves-effect waves-light btn-large" 
                        onClick={this.markExitAttendance}>Exiting</button>

                    <div className="row">   
                        <h6 id="textcolorAttendence">{this.state.labelExiting}</h6>
                    </div>

                    
                </div>
            
            </div>
        )

    }

    
}

export default withRouter(Attendance);