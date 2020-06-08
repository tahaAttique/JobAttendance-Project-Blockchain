import React, { Component } from 'react';
import './LoginFormCSS.css';
import {BrowserRouter , Route, withRouter} from 'react-router-dom';
import {Attendance_Contract_ADDRESS, Attendance_Contract_ABI} from '../config';
import Web3 from 'web3';

class ViewExitAttendance extends Component{


    constructor(props)
    {
      super(props);
      this.state={whichAttendance:"enterance",showText: false,enteranceAttendanceArray:'', exitAttendanceArray:'' ,account:'', attendanceContract:'', web3:''};  
    
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


        this.state.attendanceContract.methods.
            getMarkEnteranceAttendance().call().then((result)=>{
                    console.log(result);
                    this.setState({
                        enteranceAttendanceArray:result
                    })
            });


        this.state.attendanceContract.methods.
        getMarkExitAttendance().call().then((result)=>{
            console.log(result);
            this.setState({
                exitAttendanceArray:result
            })
        });


        setTimeout(()=>{
            console.log("usman"+ this.state.exitAttendanceArray[1].Date);
            this.setState({ showText: true })

        },2000);
    

    }

    showExteranceAttendence=()=>{
        this.props.history.push('/ViewAttendance');
    }

    showExitAttendence=()=>{
        this.props.history.push('/ViewExitAttendance');
    }

    handelHomeClicked=(e)=>{
        e.preventDefault();
        this.props.history.push('/');  

    }

    render(){

        const { showText } = this.state
        return(
            <div className="container">
    
                {showText && 

                                <div>

                                        <div className="row">
                                            <p className="center-align">
                                                <div className="col s4">
                                                    <button  className="waves-effect waves-light btn-large" 
                                                    onClick={this.handelHomeClicked}>Home</button>
                                                </div>
                                                <div className="col s4">
                                                        <button  className="waves-effect waves-light btn-large" 
                                                        onClick={this.showExteranceAttendence}>Enterance Attendance</button>
                                                </div>
                                                <div className="col s4">
                                                        <button  className="waves-effect waves-light btn-large" 
                                                            onClick={this.showExitAttendence}>Exit Attendance</button>
                                                </div>
                                            </p>    
                                    </div>    
                                <ul>
                                    {this.state.exitAttendanceArray.map(item => (

                                    <li > 

                                        <div class="row">
                                            <div class="col s12">
                                                <div class="card blue-grey darken-1">
                                                    <div class="card-content white-text">
                                                        <span class="card-title">{item.acccountAddress}</span>
                                                        <h3>Date: {item.Date.day} / {item.Date.month} / {item.Date.year} </h3>
                                                        <h3>Time: {item.timeEntered.hour} : {item.timeEntered.minute} </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                            

                                    ))}
                            </ul>
                            </div>
                
                    }

            </div>
        );
    
    }   

}

export default withRouter(ViewExitAttendance);