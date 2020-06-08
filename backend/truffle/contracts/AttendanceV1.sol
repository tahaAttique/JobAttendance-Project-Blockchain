pragma solidity >=0.4.21 <0.7.0;

contract Attendance {
    struct Employee{
        string name;
        string status;  // this teels ke late ha , on ha ye early ha 
        bool arrived; // this checks ke arrive hua ha ke nahi 
    }
    
    address payable public owner; // owner address save ho ga is me 
    
    
    mapping(address => Employee) public employee; //  this tells that which address is of which employee
    address [] public addresses; // this will contain all addresses
    
    uint startTime; // job start time 
    uint endTime;  // job end time 
    
    // some calculations 
    uint constant SECONDS_PER_DAY = 24 * 60 * 60;
    uint constant SECONDS_PER_HOUR = 60 * 60;
    uint constant SECONDS_PER_MINUTE = 60;
    int constant OFFSET19700101 = 2440588;
   
    
    constructor() public
    {
        owner=msg.sender;
        
        startTime = getTimestampFromDateTime(getYear(now), getMonth(now) ,getDay(now), 9-5, 0, 0);  // convert these to pakistan time and secs
        endTime = getTimestampFromDateTime(getYear(now), getMonth(now), getDay(now), 17-5, 0, 0);
		
    }
    
    function addEmployees(address payable _emp,string memory _name) public onlyOwner // to do employee
    {
        addresses.push(_emp);
        employee[_emp]=Employee(_name,"R",false);
    }
    
    function getS() public view returns (uint)
	{
		return startTime;
	}
	
	function getL() public view returns (uint)
	{
		return endTime;
	}
	
	function getNow() public view returns (uint)
	{
		return now;
	}
	
    function empArrive() public
    {
        for (uint i=0;i<addresses.length;i++)
        {
            if (addresses[i]==msg.sender)
            {
                if (now>startTime)
                {
                employee[msg.sender].status="ArriveLate";
                }
                if (now==startTime)
                {
                     employee[msg.sender].status="Arrive";
                }
                if (now<startTime)
                {
                     employee[msg.sender].status="ArriveEarly";
                }
                employee[msg.sender].arrived=true;
                break;
            }
        }
    }
    
    function empLeave() public
    {
        for (uint i=0;i<addresses.length;i++)
        {
            if (addresses[i]==msg.sender)
            {
               require(employee[msg.sender].arrived==true);
               if (now>endTime)
                {
                employee[msg.sender].status="LeftLate";
                }
                if (now==endTime)
                {
                     employee[msg.sender].status="Left";
                }
                if (now<endTime)
                {
                     employee[msg.sender].status="LeftEarly";
                }
                break;
            }
        }
    }
    
    function getStatus(address payable _emp) public view returns (string memory)
    {
        return employee[_emp].status;
    }
	
	modifier onlyOwner {
		require(msg.sender == owner, "Only owner is allowed");
		_;
	}


//////////////////////////////   Time Stamp Function            ///////////////////////////////////////////////////////////////////////////////////
	function _daysFromDate(uint year, uint month, uint day) internal pure returns (uint _days) {
        require(year >= 1970);
        int _year = int(year);
        int _month = int(month);
        int _day = int(day);

        int __days = _day
          - 32075
          + 1461 * (_year + 4800 + (_month - 14) / 12) / 4
          + 367 * (_month - 2 - (_month - 14) / 12 * 12) / 12
          - 3 * ((_year + 4900 + (_month - 14) / 12) / 100) / 4
          - OFFSET19700101;

        _days = uint(__days);
    }
	
	function timestampFromDateTime(uint year, uint month, uint day, uint hour, uint minute, uint second) internal pure returns (uint timestamp) {
        timestamp = _daysFromDate(year, month, day) * SECONDS_PER_DAY + hour * SECONDS_PER_HOUR + minute * SECONDS_PER_MINUTE + second;
    }
	
	function getTimestampFromDateTime(uint year, uint month, uint day, uint hour, uint minute, uint second) public pure returns (uint timestamp) {
        return timestampFromDateTime(year, month, day, hour, minute, second);
    }
    
    function _daysToDate(uint _days) internal pure returns (uint year, uint month, uint day) {
        int __days = int(_days);

        int L = __days + 68569 + OFFSET19700101;
        int N = 4 * L / 146097;
        L = L - (146097 * N + 3) / 4;
        int _year = 4000 * (L + 1) / 1461001;
        L = L - 1461 * _year / 4 + 31;
        int _month = 80 * L / 2447;
        int _day = L - 2447 * _month / 80;
        L = _month / 11;
        _month = _month + 2 - 12 * L;
        _year = 100 * (N - 49) + _year + L;

        year = uint(_year);
        month = uint(_month);
        day = uint(_day);
    }
    
	function Day() public view returns (uint)
	{
		return getDay(now);
	}
	
    function Hour() public view returns (uint)
    {
        return getHour(now);
    }

    
    
    function timestampToDateTime(uint timestamp) internal pure returns (uint year, uint month, uint day, uint hour, uint minute, uint second) {
        (year, month, day) = _daysToDate(timestamp / SECONDS_PER_DAY);
        uint secs = timestamp % SECONDS_PER_DAY;
        hour = secs / SECONDS_PER_HOUR;
        secs = secs % SECONDS_PER_HOUR;
        minute = secs / SECONDS_PER_MINUTE;
        second = secs % SECONDS_PER_MINUTE;
    }
    
    function getYear(uint timestamp) internal pure returns (uint year) {
        (year,,) = _daysToDate(timestamp / SECONDS_PER_DAY);
        return year;
    }
    
    function getMonth(uint timestamp) internal pure returns (uint month) {
        (,month,) = _daysToDate(timestamp / SECONDS_PER_DAY);
        return month;
    }
    
    function getDay(uint timestamp) internal pure returns (uint day) {
        (,,day) = _daysToDate(timestamp / SECONDS_PER_DAY);
        return day;
    }
    
    function getHour(uint timestamp) internal pure returns (uint hour) {
        uint secs = timestamp % SECONDS_PER_DAY;
        hour = secs / SECONDS_PER_HOUR;
        return hour;
    }
    
    function getMinute(uint timestamp) internal pure returns (uint minute) {
        uint secs = timestamp % SECONDS_PER_HOUR;
        minute = secs / SECONDS_PER_MINUTE;
        return minute;
    }
    
    function getSecond(uint timestamp) internal pure returns (uint second) {
        second = timestamp % SECONDS_PER_MINUTE;
        return second;
    }
    
     
    function _isLeapYear(uint year) internal pure returns (bool leapYear) {
        leapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }
    
    function _getDaysInMonth(uint year, uint month) internal pure returns (uint daysInMonth) {
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            daysInMonth = 31;
        } else if (month != 2) {
            daysInMonth = 30;
        } else {
            daysInMonth = _isLeapYear(year) ? 29 : 28;
        }
    }
    
    function addYears(uint timestamp, uint _years) internal pure returns (uint newTimestamp) {
        (uint year, uint month, uint day) = _daysToDate(timestamp / SECONDS_PER_DAY);
        year += _years;
        uint daysInMonth = _getDaysInMonth(year, month);
        if (day > daysInMonth) {
            day = daysInMonth;
        }
        newTimestamp = _daysFromDate(year, month, day) * SECONDS_PER_DAY + timestamp % SECONDS_PER_DAY;
        require(newTimestamp >= timestamp);
    }
    
    function addMonths(uint timestamp, uint _months) internal pure returns (uint newTimestamp) {
        (uint year, uint month, uint day) = _daysToDate(timestamp / SECONDS_PER_DAY);
        month += _months;
        year += (month - 1) / 12;
        month = (month - 1) % 12 + 1;
        uint daysInMonth = _getDaysInMonth(year, month);
        if (day > daysInMonth) {
            day = daysInMonth;
        }
        newTimestamp = _daysFromDate(year, month, day) * SECONDS_PER_DAY + timestamp % SECONDS_PER_DAY;
        require(newTimestamp >= timestamp);
    }
    
    function addDays(uint timestamp, uint _days) internal pure returns (uint newTimestamp) {
        newTimestamp = timestamp + _days * SECONDS_PER_DAY;
        require(newTimestamp >= timestamp);
    }
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    
}