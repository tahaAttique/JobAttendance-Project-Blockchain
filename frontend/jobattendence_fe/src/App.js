import React, { Component } from 'react';
import Web3 from 'web3';
import {Attendance_Contract_ADDRESS, Attendance_Contract_ABI} from './config.js';
import LoginForm from './components/LoginForm';
import {BrowserRouter , Route} from 'react-router-dom';
import Attendance from './components/Attendance'
import RegisterForm from './components/RegisterForm'
class App extends Component{

  constructor(props)
  {
    super(props);
    this.state={loginedAddress:'',account: [], attendanceContract:'', web3:'' ,  registeredNames: [] , list: [1, 2, 3] };

    // var today = new Date();
    // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  }

  

  componentDidMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
    
    const  accounts = await web3.eth.getAccounts()
    const attendanceContract = new web3.eth.Contract(Attendance_Contract_ABI,Attendance_Contract_ADDRESS);

    this.setState({account: accounts, attendanceContract: attendanceContract, web3: web3})


    // Check Balance ..................................
    //var balance = web3.eth.getBalance("0xBfeD1Ca7e5494c8C0421CDE6f4B6E4A54e742DC2");
    //console.log(balance);     
    
    // Verify.............................................
    // await attendanceContract.methods.verifyUser("taha","1234").send({from: '0xBfeD1Ca7e5494c8C0421CDE6f4B6E4A54e742DC2', gas:3000000});
    // await attendanceContract.methods.verifyUserResults().call().then(function(result){
    //       console.log(result.isVerified);
    // });

    // Add Employee /.................................
     //await attendanceContract.methods.registerEmployee("zak","1234","0xBfeD1Ca7e5494c8C0421CDE6f4B6E4A54e742DC2").send({from: '0xBfeD1Ca7e5494c8C0421CDE6f4B6E4A54e742DC2', gas:3000000});
  //   await attendanceContract.methods.getRegisteredAddresses().call().then(function(result){
  //      console.log(result);
  //  });



    //const registeredNames = await attendanceContract.methods.getRegisteredUserName().call();
    //this.setState({ registeredNames: registeredNames })

    {/* <ul>
                      {this.state.registeredNames.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul> */}
  }

  changeLoginedAddress=(nextPage)=>{

    this.setState({
      loginedAddress:nextPage
    })
  }

  render(){
    return(
          <div className="App">
        
                   <BrowserRouter>
                        <div className="App">
                  
                          <Route exact path='/' component={(props)=> <LoginForm changeLoginedAddress={this.changeLoginedAddress} />} />
                          <Route path='/Attendance'  render={(props)=> <Attendance loginedAddress={this.state.loginedAddress} /> } /> 
                          <Route path='/RegisterForm'  render={(props)=> <RegisterForm/> } /> 
                        
                          
                        </div>
                   </BrowserRouter>         
              
          </div>
   );
  }
}

export default App;