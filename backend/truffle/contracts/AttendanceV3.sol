pragma solidity >=0.4.25 <0.7.0;
pragma experimental ABIEncoderV2;



contract AttendanceV3 {
    
    // This Employee model will be used for login and register 
    struct Employee{
        string username;
        string password;
        address acccountAddress;
     
    }
    
    struct enteryAttendance{
        address acccountAddress;
        string timeEntered;
    }
    
    struct exitAttendance{
        address acccountAddress;
        string timeExit;
    }
    
    struct caseVerifiedStruct{  // this is for retuning if username and password is correct
        address acccountAddress;
        bool isVerified;
    }
    
    Employee [] private allEmployees; // there will be all employees
    string [] arrayUsername;
    address []  arrayAddresses;
            
    address public owner; // owner address save ho ga is me 
    
    
    // mapping(string => enteryAttendance[] ) public mappingEnteryAttendance; //  date -> (map)_->  enteryAttendanceArray
    // mapping(string => exitAttendance[] ) public mappingExitAttendance; //  date -> (map)_->  exitAttendance
    
    uint jobStartTimeHr; // job start time 
    uint jobEndTimeHr;  // job end time 
   
    
    constructor() public
    {
        owner=msg.sender;
        
        jobStartTimeHr=9; // 9 am 
        jobEndTimeHr=17; // 5 pm
      
    }

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
    
    function registerEmployee (string memory _username, string memory _password, address _acccountAddress) public {
        
        Employee memory tempEmp=Employee({username:_username, password:_password ,  acccountAddress:_acccountAddress});
        allEmployees.push(tempEmp);
        arrayUsername.push(_username);
        arrayAddresses.push(_acccountAddress);
        
    }
    
    function verifyUser(string memory _username, string memory _password) public returns (caseVerifiedStruct memory) {
        
        for(uint i=0 ;i<allEmployees.length; i++){
            
            if(this.equal(allEmployees[i].username, _username))
            {
                if( this.equal(allEmployees[i].password, _password))
                {
                    caseVerifiedStruct memory temp= caseVerifiedStruct({acccountAddress:allEmployees[i].acccountAddress , isVerified:true});
                    return temp;
                }
            }
        }
        
        caseVerifiedStruct memory temp2= caseVerifiedStruct({acccountAddress: msg.sender , isVerified:false});  // will return own address and check will be false 
        return temp2;
        
    }
    
    function getRegisteredUserName() public view returns  ( string [] memory){
        
        return arrayUsername;
        
    }
    
    function getRegisteredAddresses() public view returns  ( address [] memory){
        
        return arrayAddresses;
        
    }

	
	modifier onlyOwner {
		require(msg.sender == owner, "Only owner is allowed");
		_;
	}

}