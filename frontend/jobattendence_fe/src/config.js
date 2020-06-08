export const Attendance_Contract_ADDRESS='0x0026fFaC28de47cAA5C78B19165aa58B8B387cFa'

export const Attendance_Contract_ABI =[
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "day",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "month",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "year",
              "type": "string"
            }
          ],
          "internalType": "struct AttendanceV4.Datee",
          "name": "_date",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "hour",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "minute",
              "type": "string"
            }
          ],
          "internalType": "struct AttendanceV4.Timee",
          "name": "_time",
          "type": "tuple"
        },
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "markEnteranceAttendance",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "day",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "month",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "year",
              "type": "string"
            }
          ],
          "internalType": "struct AttendanceV4.Datee",
          "name": "_date",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "hour",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "minute",
              "type": "string"
            }
          ],
          "internalType": "struct AttendanceV4.Timee",
          "name": "_time",
          "type": "tuple"
        },
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "markExitAttendance",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getMarkEnteranceAttendance",
      "outputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "day",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "month",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "year",
                  "type": "string"
                }
              ],
              "internalType": "struct AttendanceV4.Datee",
              "name": "Date",
              "type": "tuple"
            },
            {
              "internalType": "address",
              "name": "acccountAddress",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "hour",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "minute",
                  "type": "string"
                }
              ],
              "internalType": "struct AttendanceV4.Timee",
              "name": "timeEntered",
              "type": "tuple"
            }
          ],
          "internalType": "struct AttendanceV4.Attendance[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getMarkExitAttendance",
      "outputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "day",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "month",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "year",
                  "type": "string"
                }
              ],
              "internalType": "struct AttendanceV4.Datee",
              "name": "Date",
              "type": "tuple"
            },
            {
              "internalType": "address",
              "name": "acccountAddress",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "hour",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "minute",
                  "type": "string"
                }
              ],
              "internalType": "struct AttendanceV4.Timee",
              "name": "timeEntered",
              "type": "tuple"
            }
          ],
          "internalType": "struct AttendanceV4.Attendance[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "day",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "month",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "year",
              "type": "string"
            }
          ],
          "internalType": "struct AttendanceV4.Datee",
          "name": "_date",
          "type": "tuple"
        }
      ],
      "name": "makeEnteranceAttendanceArrayByDate",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getEnteranceAttendanceArrayByDate",
      "outputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "day",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "month",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "year",
                  "type": "string"
                }
              ],
              "internalType": "struct AttendanceV4.Datee",
              "name": "Date",
              "type": "tuple"
            },
            {
              "internalType": "address",
              "name": "acccountAddress",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "hour",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "minute",
                  "type": "string"
                }
              ],
              "internalType": "struct AttendanceV4.Timee",
              "name": "timeEntered",
              "type": "tuple"
            }
          ],
          "internalType": "struct AttendanceV4.Attendance[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "day",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "month",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "year",
              "type": "string"
            }
          ],
          "internalType": "struct AttendanceV4.Datee",
          "name": "_date",
          "type": "tuple"
        }
      ],
      "name": "makeExitAttendanceArrayByDate",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getExitAttendanceArrayByDate",
      "outputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "day",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "month",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "year",
                  "type": "string"
                }
              ],
              "internalType": "struct AttendanceV4.Datee",
              "name": "Date",
              "type": "tuple"
            },
            {
              "internalType": "address",
              "name": "acccountAddress",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "hour",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "minute",
                  "type": "string"
                }
              ],
              "internalType": "struct AttendanceV4.Timee",
              "name": "timeEntered",
              "type": "tuple"
            }
          ],
          "internalType": "struct AttendanceV4.Attendance[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_username",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_password",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_acccountAddress",
          "type": "address"
        }
      ],
      "name": "registerEmployee",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_username",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_password",
          "type": "string"
        }
      ],
      "name": "verifyUser",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "verifyUserResults",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "acccountAddress",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isVerified",
              "type": "bool"
            }
          ],
          "internalType": "struct AttendanceV4.caseVerifiedStruct",
          "name": "",
          "type": "tuple"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getRegisteredUserName",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getRegisteredAddresses",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "string",
          "name": "s",
          "type": "string"
        }
      ],
      "name": "stringToUint",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "result",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_a",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_b",
          "type": "string"
        }
      ],
      "name": "equal",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_a",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_b",
          "type": "string"
        }
      ],
      "name": "compare",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]