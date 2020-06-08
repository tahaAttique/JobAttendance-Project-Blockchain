import React, { Component } from 'react';
import './LoginFormCSS.css';
import {BrowserRouter , Route, withRouter} from 'react-router-dom';
import {Attendance_Contract_ADDRESS, Attendance_Contract_ABI} from '../config';
import Web3 from 'web3';

class Attendance extends Component{


    constructor(props)
    {
      super(props);
      this.state={account:'',loginedAddress: this.props.loginedAddress, labelEntering:'', labelExiting:'',attendanceContract:'',web3:''};  
    
    }

    componentDidMount() {
        this.loadBlockchainData()
    }
    
    async loadBlockchainData() {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
        
        const  accounts = await web3.eth.getAccounts()
        const attendanceContract = new web3.eth.Contract(Attendance_Contract_ABI,Attendance_Contract_ADDRESS);

        this.setState({
                account: accounts[0], 
                attendanceContract: attendanceContract,
                 web3: web3
        })

    }


    markEnteranceAttendance=()=>{
        if(this.state.loginedAddress !== '')
        {
             var today = new Date();
             var getFullYear = today.getFullYear().toString(); 
             var getMonth = (today.getMonth()+1).toString();
             var getDate = today.getDate().toString();
             var getHours = today.getHours().toString(); 
             var getMinutes = today.getMinutes().toString();


            this.state.attendanceContract.methods.
            markEnteranceAttendance({day:getDate  , month:getMonth , year:getFullYear },{hour:getHours , minute: getMinutes},this.state.loginedAddress).
            send({from: '0xBfeD1Ca7e5494c8C0421CDE6f4B6E4A54e742DC2', gas:3000000});

            
            
            setTimeout(()=>{
                this.props.history.push('/');
            },2000);
          
        }
        
    }

    markExitAttendance=()=>{

        if(this.state.loginedAddress !== '')
        {
             var today = new Date();
             var getFullYear = today.getFullYear().toString(); 
             var getMonth = (today.getMonth()+1).toString();
             var getDate = today.getDate().toString();
             var getHours = today.getHours().toString(); 
             var getMinutes = today.getMinutes().toString();


            this.state.attendanceContract.methods.
            markExitAttendance({day:getDate  , month:getMonth , year:getFullYear },{hour:getHours , minute: getMinutes},this.state.loginedAddress).
            send({from: '0xBfeD1Ca7e5494c8C0421CDE6f4B6E4A54e742DC2', gas:3000000});


            setTimeout(()=>{
                this.props.history.push('/');
            },2000);
            
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