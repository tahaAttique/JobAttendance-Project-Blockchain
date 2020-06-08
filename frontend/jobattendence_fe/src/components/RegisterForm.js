import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import './LoginFormCSS.css';
import Web3 from 'web3';
import {Attendance_Contract_ADDRESS, Attendance_Contract_ABI} from '../config';
import {BrowserRouter , Route, withRouter} from 'react-router-dom';


class RegisterForm extends Component{


    constructor(props)
    {
      super(props);
      this.state={username:'', password:'', registerAccountAddress:'',attendanceContract:'',web3:''};
     
        
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

        this.state.attendanceContract.methods.getRegisteredAddresses().call().then(function(result){
            console.log(result);
        });
    
       this.state.attendanceContract.methods.getRegisteredUserName().call().then(function(result){
           console.log(result);
       });
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

    onChangeregisterAccountAddressInput=(e)=>{

        this.setState({

            registerAccountAddress: e.target.value

        })
    }

    handelHomeClicked=(e)=>{
        e.preventDefault();
        this.props.history.push('/');  

    }

    handelRegisterClicked=(e)=>{
        e.preventDefault();

        if(this.state.username!=='' && this.state.password!=='' && this.state.registerAccountAddress!=='')
        {
            this.state.attendanceContract.methods.
            registerEmployee(this.state.username,this.state.password,this.state.registerAccountAddress).
            send({from: '0xBfeD1Ca7e5494c8C0421CDE6f4B6E4A54e742DC2', gas:3000000});
            
            

            setTimeout(()=>{
                //just for keeping in safe side
                this.props.history.push('/'); 
            },1000)
        }
        
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
                            <h2 id="H2Login" >Register</h2>
                            <form>
                                <label id="blackcolourText">Username:</label>
                                <input id="blackcolourText"  type="text"  onChange={this.onChangeUserNameInput} ></input>
                                <label id="blackcolourText">Password:</label>
                                <input type="password"   onChange={this.onChangePasswordInput} ></input>
                                <label id="blackcolourText">Account Address:</label>
                                <input type="text"   onChange={this.onChangeregisterAccountAddressInput} ></input>

                                <div className="row">
                                    <div className='col s6'>
                                        <p className="center-align">
                                            <a type="submit" className="waves-effect waves-light btn-small findbtn valign-wrapper " 
                                            onClick={this.handelRegisterClicked}>Register</a>
                                        </p>
                                    </div>
                                    <div className='col s6'>
                                        <p className="center-align">
                                            <a type="submit" className="waves-effect waves-light btn-small findbtn valign-wrapper " onClick={this.handelHomeClicked}>Home</a>
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

  export default withRouter(RegisterForm);