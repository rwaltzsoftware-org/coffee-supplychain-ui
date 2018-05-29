var globCoinbase;

var globIcoAddress = {
	'CoffeeMain': "0x8072e44fb7528e8f54907da93c318402c959eb7f",
};

var globMainContract = false;

window.addEventListener('load', function() 
{  
  	if (typeof web3 !== 'undefined') {
	  web3 = new Web3(web3.currentProvider);
	} else {
	  // set the provider you want from Web3.providers
	  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
	}

	getCurrentAccountAddress((address)=>{
		/*  To Restrict User in Admin Section */
		var currentPath = window.location.pathname;
		var tmpStack = currentPath.split("/");
		var currentPanel = tmpStack.pop();

		if(currentPanel == "admin.php")
		{
			if(address != 0x9F386CcD8A8e7043314902ECE639DE8E2452d731){
				window.location = "index.php";
			}
		}
	});

	initContract();

	setInterval(function(){
		updateLoginAccountStatus();
	},500);

});

function initContract()
{
	globMainContract = new web3.eth.Contract(CoffeeSupplyChainAbi,globIcoAddress.CoffeeMain);	
	$(window).trigger("mainContractReady");

	getAllEvents(globMainContract);
}

/*Vikas - Start*/

function updateLoginAccountStatus(){

	web3.eth.getAccounts(function(err,accounts){

		if(err){
			console.log('An error occurred '+ err);
		}else if(accounts.length == 0){
			sweetAlert('Error', 'Please login to MetaMask..!', 'error');
			$("#currentUserAddress").html("0x0000000000000000000000000000000000000000");
		}else{
			initAccountDetails();
		}
	});
}	

function initAccountDetails(){
	getCurrentAccountAddress((address)=>{
		globCoinbase = address;
		$("#currentUserAddress").html(globCoinbase);
	})
}

function getCurrentAccountAddress(callback){
	callback = callback || false;

	web3.eth.getCoinbase()
	.then((_coinbase)=>{
		callback(_coinbase);
	})
	.catch((err)=>{
		if(callback){
			callback(0);
		}
	})
}

function getAllEvents(contractRef)
{
	// console.log(contractRef);
	// contractRef.getPastEvents('UserUpdate', {
	//     // filter: {myIndexedParam: [20,23], myOtherIndexedParam: '0x123456789...'}, // Using an array means OR: e.g. 20 or 23
	//     fromBlock: 0,
	//     toBlock: 'latest'
	// }, function(error, events){ console.log(events); })
	// .then(function(events){
	//     console.log(events) // same results as the optional callback above
	// });

	contractRef.events.UserUpdate({
	    fromBlock: 0
	    // toBlock: 'latest'
	}, function(error, event){
		console.log("event : ",event);
		console.log("error : ",error);
	});

	// contractRef.UserUpdate({}, { fromBlock: 0, toBlock: 'latest' }).get((error, eventResult) => {
	//   if (error)
	//     console.log('Error in myEvent event handler: ' + error);
	//   else
	//     console.log('myEvent: ' + JSON.stringify(eventResult.args));
	// });

	// console.log(contractRef);
 //    contractRef.getPastEvents('UserUpdate',{
 //        fromBlock:0,
 //        /*filter: {to: globCoinbase}  */      
 //    }).then(function (events){
 //        console.log(events);
        	
 //        // $("#transactions tbody").html(buildTransactionData(events));
 //        // $("#transactions").DataTable();
 //    });
}

/*Vikas -End*/
