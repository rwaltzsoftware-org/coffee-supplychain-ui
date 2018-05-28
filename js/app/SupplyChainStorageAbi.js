var SupplyChainStorageAbi = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "batchNo",
				"type": "bytes32"
			}
		],
		"name": "getProccesorData",
		"outputs": [
			{
				"name": "quantity",
				"type": "uint256"
			},
			{
				"name": "tempature",
				"type": "string"
			},
			{
				"name": "rostingDuration",
				"type": "uint256"
			},
			{
				"name": "internalBatchNo",
				"type": "string"
			},
			{
				"name": "packageDateTime",
				"type": "uint256"
			},
			{
				"name": "processorName",
				"type": "string"
			},
			{
				"name": "processorAddress",
				"type": "string"
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
				"name": "_caller",
				"type": "address"
			}
		],
		"name": "deAuthorizeCaller",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "batchNo",
				"type": "bytes32"
			}
		],
		"name": "getHarvesterData",
		"outputs": [
			{
				"name": "cropVariety",
				"type": "string"
			},
			{
				"name": "tempatureUsed",
				"type": "string"
			},
			{
				"name": "humidity",
				"type": "string"
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
				"name": "_userAddress",
				"type": "address"
			}
		],
		"name": "getUserRole",
		"outputs": [
			{
				"name": "",
				"type": "string"
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
				"name": "_caller",
				"type": "address"
			}
		],
		"name": "authorizeCaller",
		"outputs": [
			{
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
				"name": "batchNo",
				"type": "bytes32"
			},
			{
				"name": "_quantity",
				"type": "uint256"
			},
			{
				"name": "_destinationAddress",
				"type": "string"
			},
			{
				"name": "_shipName",
				"type": "string"
			},
			{
				"name": "_shipNo",
				"type": "string"
			},
			{
				"name": "_estimateDateTime",
				"type": "uint256"
			},
			{
				"name": "_plantNo",
				"type": "uint256"
			},
			{
				"name": "_exporterId",
				"type": "uint256"
			}
		],
		"name": "setExporterData",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_batchNo",
				"type": "bytes32"
			}
		],
		"name": "getNextAction",
		"outputs": [
			{
				"name": "",
				"type": "string"
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
				"name": "batchNo",
				"type": "bytes32"
			},
			{
				"name": "_quantity",
				"type": "uint256"
			},
			{
				"name": "_shipName",
				"type": "string"
			},
			{
				"name": "_shipNo",
				"type": "string"
			},
			{
				"name": "_transportInfo",
				"type": "string"
			},
			{
				"name": "_warehouseName",
				"type": "string"
			},
			{
				"name": "_warehouseAddress",
				"type": "string"
			},
			{
				"name": "_importerId",
				"type": "uint256"
			}
		],
		"name": "setImporterData",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_userAddress",
				"type": "address"
			}
		],
		"name": "getUser",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "contactNo",
				"type": "string"
			},
			{
				"name": "role",
				"type": "string"
			},
			{
				"name": "isActive",
				"type": "bool"
			},
			{
				"name": "profileHash",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "batchNo",
				"type": "bytes32"
			}
		],
		"name": "getExporterData",
		"outputs": [
			{
				"name": "quantity",
				"type": "uint256"
			},
			{
				"name": "destinationAddress",
				"type": "string"
			},
			{
				"name": "shipName",
				"type": "string"
			},
			{
				"name": "shipNo",
				"type": "string"
			},
			{
				"name": "departureDateTime",
				"type": "uint256"
			},
			{
				"name": "estimateDateTime",
				"type": "uint256"
			},
			{
				"name": "plantNo",
				"type": "uint256"
			},
			{
				"name": "exporterId",
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
				"name": "batchNo",
				"type": "bytes32"
			},
			{
				"name": "_quantity",
				"type": "uint256"
			},
			{
				"name": "_tempature",
				"type": "string"
			},
			{
				"name": "_rostingDuration",
				"type": "uint256"
			},
			{
				"name": "_internalBatchNo",
				"type": "string"
			},
			{
				"name": "_packageDateTime",
				"type": "uint256"
			},
			{
				"name": "_processorName",
				"type": "string"
			},
			{
				"name": "_processorAddress",
				"type": "string"
			}
		],
		"name": "setProcessorData",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
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
				"name": "batchNo",
				"type": "bytes32"
			}
		],
		"name": "getImporterData",
		"outputs": [
			{
				"name": "quantity",
				"type": "uint256"
			},
			{
				"name": "shipName",
				"type": "string"
			},
			{
				"name": "shipNo",
				"type": "string"
			},
			{
				"name": "arrivalDateTime",
				"type": "uint256"
			},
			{
				"name": "transportInfo",
				"type": "string"
			},
			{
				"name": "warehouseName",
				"type": "string"
			},
			{
				"name": "warehouseAddress",
				"type": "string"
			},
			{
				"name": "importerId",
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
				"name": "batchNo",
				"type": "bytes32"
			},
			{
				"name": "_cropVariety",
				"type": "string"
			},
			{
				"name": "_tempatureUsed",
				"type": "string"
			},
			{
				"name": "_humidity",
				"type": "string"
			}
		],
		"name": "setHarvesterData",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_batchNo",
				"type": "bytes32"
			}
		],
		"name": "getBasicDetails",
		"outputs": [
			{
				"name": "registrationNo",
				"type": "string"
			},
			{
				"name": "farmerName",
				"type": "string"
			},
			{
				"name": "farmAddress",
				"type": "string"
			},
			{
				"name": "exporterName",
				"type": "string"
			},
			{
				"name": "importerName",
				"type": "string"
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
				"name": "_registrationNo",
				"type": "string"
			},
			{
				"name": "_farmerName",
				"type": "string"
			},
			{
				"name": "_farmAddress",
				"type": "string"
			},
			{
				"name": "_exporterName",
				"type": "string"
			},
			{
				"name": "_importerName",
				"type": "string"
			}
		],
		"name": "setBasicDetails",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
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
				"name": "_userAddress",
				"type": "address"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_contactNo",
				"type": "string"
			},
			{
				"name": "_role",
				"type": "string"
			},
			{
				"name": "_isActive",
				"type": "bool"
			},
			{
				"name": "_profileHash",
				"type": "bytes32"
			}
		],
		"name": "setUser",
		"outputs": [
			{
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
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "batchNo",
				"type": "bytes32"
			}
		],
		"name": "getFarmInspectorData",
		"outputs": [
			{
				"name": "coffeeFamily",
				"type": "string"
			},
			{
				"name": "typeOfSeed",
				"type": "string"
			},
			{
				"name": "fertilizerUsed",
				"type": "string"
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
				"name": "batchNo",
				"type": "bytes32"
			},
			{
				"name": "_coffeeFamily",
				"type": "string"
			},
			{
				"name": "_typeOfSeed",
				"type": "string"
			},
			{
				"name": "_fertilizerUsed",
				"type": "string"
			}
		],
		"name": "setFarmInspectorData",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_caller",
				"type": "address"
			}
		],
		"name": "AuthorizedCaller",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_caller",
				"type": "address"
			}
		],
		"name": "DeAuthorizedCaller",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			}
		],
		"name": "OwnershipRenounced",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	}
]