import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import './LoginFormCSS.css';
import Web3 from 'web3';
import {Attendance_Contract_ADDRESS, Attendance_Contract_ABI} from '../config';
import {BrowserRouter , Route, withRouter} from 'react-router-dom';
import Attendance from './Attendance';


class LoginForm extends Component{


    constructor(props)
    {
      super(props);
      this.state={username:'', password:'', account:'',attendanceContract:'',web3:''};
      
        
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


    onChangePasswordInput=(e)=>{

        this.setState({

            password: e.target.value

        })
    }

    onChangeUserNameInput=(e)=>{

        this.setState({

            username: e.target.value

        })
    }

    handelLoginClicked=(e)=>{
        e.preventDefault();
        
        this.state.attendanceContract.methods.verifyUser(this.state.username,this.state.password).send
        ({from: this.state.account, gas:3000000});

        setTimeout(()=>{
            //just for keeping in safe side
            this.state.attendanceContract.methods.verifyUserResults().call().then((result)=>{
                //console.log(result.isVerified);  
                if(result.isVerified===true)
                {   
                    this.props.changeLoginedAddress(result.acccountAddress);
                    setTimeout(()=>{
                        //just for keeping in safe side
                        this.props.history.push('/Attendance');
                    },2000)       
                }else{  
                    //failed login
                }
    
            }); 
        },1000)
       

    }

    handelRegisterClicked=(e)=>{
        e.preventDefault();

        this.props.history.push('/RegisterForm');
        
    }

    
    render(){
        
      return(
    
        <div className="container" >
            
            <div className="row"></div>
            <div className="row"></div>
            <div className="row"></div>
            <div className="row"></div>
            <div className="row"></div>
    

            <div className="row">
                <div className="col s3"></div>

                    <div className="col s5 ">

                        <div className="card" id="card1"> 
                            <h2 id="H2Login" >Log In</h2>
                            <form>
                                <label id="blackcolourText">Username:</label>
                                <input id="blackcolourText"  type="text"  onChange={this.onChangeUserNameInput} ></input>
                                <label id="blackcolourText">Password:</label>
                                <input type="password"   onChange={this.onChangePasswordInput} id="lname" name="lname"></input>
                                
                                <div className="row">
                                    <div className='col s6'>
                                        <p className="center-align">
                                            <a type="submit" className="waves-effect waves-light btn-small findbtn valign-wrapper " 
                                            onClick={this.handelLoginClicked}>Login</a>
                                        </p>
                                    </div>
                                    <div className='col s6'>
                                        <p className="center-align">
                                            <a type="submit" className="waves-effect waves-light btn-small findbtn valign-wrapper " onClick={this.handelRegisterClicked}>Register</a>
                                        </p>
                                    </div>
                                </div>
                                
                            </form>
                         </div>
                     </div>

                <div className="col s2"></div>
            </div>

            
          
        </div>
          
       );
    }
  }

  export default withRouter(LoginForm);