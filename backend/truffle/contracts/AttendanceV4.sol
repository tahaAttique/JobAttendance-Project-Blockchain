pragma solidity >=0.4.25 <0.7.0;
pragma experimental ABIEncoderV2;



contract AttendanceV4 {
    
    // This Employee model will be used for login and register 
    struct Employee{
        string username;
        string password;
        address acccountAddress;
     
    }
    
    struct Attendance{
        Datee Date;
        address acccountAddress;
        Timee timeEntered;
    }
    
    
    struct caseVerifiedStruct{  // this is for retuning if username and password is correct
        address acccountAddress;
        bool isVerified;
    }
    
    struct Datee{
        string day;
        string month;
        string year;
    }
    
    struct Timee{
        string hour;
        string minute;
    }
    
    Employee [] private allEmployees; // there will be all employees
    string [] arrayUsername;
    address []  arrayAddresses;
            
    Datee globalPresentDate ;      // this is the date which will be compared with the present date
    Timee globalPresentTime;    // this is the time which will be compared with the present time
    string globalPresentDateString; // this will be used to map
    
    address public owner; // owner address save ho ga is me 
    
    caseVerifiedStruct isVarifiedAddress;
    
    
    Attendance [] enteryAttendance;
    Attendance [] exitAttendance;
    Attendance [] enteranceAttendanceArrayByDate;
    Attendance [] exitAttendanceArrayByDate;
    
    
    uint jobStartTimeHr; // job start time 
    uint jobEndTimeHr;  // job end time 
   
    
    constructor() public
    {
        owner=msg.sender;
        
        jobStartTimeHr=9; // 9 am 
        jobEndTimeHr=17; // 5 pm
        
        
        globalPresentDate=Datee({day : "23" , month : "07" , year : "1997"}); // inicial date
        globalPresentTime=Timee({hour : "12", minute : "01" }); // inicial time 24 hr clock
        
       isVarifiedAddress=caseVerifiedStruct({acccountAddress:msg.sender , isVerified:false});
    }

// Mark Attendance Below ................................................................................

    
 
        // bool dateChanged= false;
        
        // // comparing Date
        // if ( stringToUint(_date.year) > stringToUint(globalPresentDate.year) ){
        //     dateChanged=true;
        //     globalPresentDate=Datee({day : _date.day , month : _date.month , year : _date.year });
        // }
        // else{
        //     // year cant be smaller
        //     // so here year can b equal
            
        //     if(stringToUint(_date.month) > stringToUint(globalPresentDate.month))
        //     {
        //         dateChanged=true;
        //         globalPresentDate=Datee({day : _date.day , month : _date.month , year : _date.year });
        //     }
        //     else{
        //         // month cant be smaller
        //         // so here month can b equal
                
        //         // here day either be same or must b greater
        //         if (stringToUint(_date.day) > stringToUint(globalPresentDate.day))
        //         {
        //             dateChanged=true;
        //             globalPresentDate=Datee({day : _date.day , month : _date.month , year : _date.year });
        //         }
        //     }
        // }
        
        // if(dateChanged==false){
            
        // }else{
            
            
        //  }
        
    //   function markEnteranceAttendance(Datee _date, address _address ,) public {    
          
    //     //globalPresentDateString=append(_date.day,"/",_date.month,"/",_date.year);
        
        
      
    // }

// Mark Attendance Above ................................................................................
   
    function markEnteranceAttendance(Datee memory _date, Timee memory _time , address _address) public  {
       
        Attendance memory attendance=Attendance({ Date: _date , acccountAddress: _address ,  timeEntered: _time});
        enteryAttendance.push(attendance);
    }
   
    function markExitAttendance(Datee memory _date, Timee memory _time , address  _address) public  {
       
        Attendance memory attendance=Attendance({ Date: _date , acccountAddress: _address ,  timeEntered: _time});
        exitAttendance.push(attendance);
    }
    
    function getMarkEnteranceAttendance() public view returns (Attendance [] memory) {
       
        return enteryAttendance;
    }
    
    function getMarkExitAttendance() public view returns (Attendance [] memory) {
       
        return exitAttendance;
    }
    
    function makeEnteranceAttendanceArrayByDate(Datee memory _date) public {
        
        delete enteranceAttendanceArrayByDate;
        
        
        for (uint i=0;i<enteryAttendance.length;i++){
            if( equal(enteryAttendance[i].Date.day, _date.day) ){
                if(equal(enteryAttendance[i].Date.month, _date.month)){
                    if(equal(enteryAttendance[i].Date.year, _date.year)){
                        enteranceAttendanceArrayByDate.push(enteryAttendance[i]);
                    }
                }
                
            }
        }
        
    }
    
    function getEnteranceAttendanceArrayByDate() public view returns (Attendance[] memory){
        return enteranceAttendanceArrayByDate;
    }
    
    function makeExitAttendanceArrayByDate(Datee memory _date) public {
        
        delete exitAttendanceArrayByDate;
        
        
        for (uint i=0;i<exitAttendance.length;i++){
            if( equal(exitAttendance[i].Date.day, _date.day) ){
                if(equal(exitAttendance[i].Date.month, _date.month)){
                    if(equal(exitAttendance[i].Date.year, _date.year)){
                        exitAttendanceArrayByDate.push(exitAttendance[i]);
                    }
                }
                
            }
        }
        
    }
    
    function getExitAttendanceArrayByDate() public view returns (Attendance[] memory){
        return exitAttendanceArrayByDate;
    }
        

    
// Register and Verification Below ........................................................................
    function registerEmployee (string memory _username, string memory _password, address _acccountAddress) public {
        
        Employee memory tempEmp=Employee({username:_username, password:_password ,  acccountAddress:_acccountAddress});
        allEmployees.push(tempEmp);
        arrayUsername.push(_username);
        arrayAddresses.push(_acccountAddress);
        
    }
    
    
    
    function verifyUser(string memory _username, string memory _password) public {
        
        bool check= false;
        
        for(uint i=0 ;i<allEmployees.length; i++){
            
            if(this.equal(allEmployees[i].username, _username))
            {
                if( this.equal(allEmployees[i].password, _password))
                {
                    isVarifiedAddress=caseVerifiedStruct({acccountAddress:allEmployees[i].acccountAddress , isVerified:true});
                   check=true;
                }
            }
        }
        
        if(check== false)
        {
             isVarifiedAddress= caseVerifiedStruct({acccountAddress: msg.sender , isVerified:false});  // will return own address and check will be false 
        }
        
    }


    function verifyUserResults() public view returns (caseVerifiedStruct memory)
    {
        return isVarifiedAddress;
    }
    function getRegisteredUserName() public view returns  ( string [] memory){
        
        return arrayUsername;
        
    }
    
    function getRegisteredAddresses() public view returns  ( address [] memory){
        
        return arrayAddresses;
        
    }
    
    
// Fuction to append strings .................................................................    

    function append(string memory a, string memory b, string memory c, string memory d, string memory e) internal pure returns (string memory) {
    
        return string(abi.encodePacked(a, b, c, d, e));
    
    }

    
//     Register and Verification Above ........................................................................
  
  
  
// This will convert String to Uint        
    function stringToUint(string memory s) public view returns (uint result) {
        bytes memory b = bytes(s);
        uint i;
        result = 0;
        for (i = 0; i < b.length; i++) {
            uint c = uint(uint8(b[i]));
            if (c >= 48 && c <= 57) {
                result = result * 10 + (c - 48);
            }
        }
    }
        
    
// These functions are of string.util for comparing two strings... Below .............................................
    
     function equal(string memory _a, string memory _b) public returns (bool) {
        return compare(_a, _b) == 0;
    }
    
    function compare(string memory _a, string memory _b) public returns (int) {
        
        bytes memory a = bytes(_a);
        bytes memory b = bytes(_b);
        uint minLength = a.length;
        if (b.length < minLength) minLength = b.length;
        //@todo unroll the loop into increments of 32 and do full 32 byte comparisons
        for (uint i = 0; i < minLength; i ++)
            if (a[i] < b[i])
                return -1;
            else if (a[i] > b[i])
                return 1;
        if (a.length < b.length)
            return -1;
        else if (a.length > b.length)
            return 1;
        else
            return 0;
    }
    
    
// These functions are of string.util for comparing two strings .....Above ...............................................

	
	modifier onlyOwner {
		require(msg.sender == owner, "Only owner is allowed");
		_;
	}

}