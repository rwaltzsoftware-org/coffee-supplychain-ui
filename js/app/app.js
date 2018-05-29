	var globIcoAddress = {
		'CoffeeMain': "0x8072e44fb7528e8f54907da93c318402c959eb7f",
	};

	var globMainContract = false;
	var globCoinbase = false;	

	window.addEventListener('load', function() 
	{  
	  	if (typeof web3 !== 'undefined') {
		  web3 = new Web3(web3.currentProvider);
		} else {
		  // set the provider you want from Web3.providers
		  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
		}

		initContract();
		updateAccountLoginStatus();
	});

	function initContract()
	{
		globMainContract = new web3.eth.Contract(CoffeeSupplyChainAbi,globIcoAddress.CoffeeMain);		
		$(window).trigger("mainContractReady");
	}

	function initAccountDetails(){
		/*
		* Get Current wallet account address
		*/
		getCurrentAccountAddress((address)=>{
			globCoinbase = address;	
			$("#userAddress").html(globCoinbase);	
			$(window).trigger("coinbaseReady");		
		});
	}

	function getCurrentAccountAddress(callback){
		callback = callback || false;
		
		web3.eth.getCoinbase()
		.then((_coinbase) => {
			callback(_coinbase);
		})
		.catch((err)=>{
			alert("Error","Unable to get Current Account Address");
			if(callback)
			{
				callback(0);
			}
		});
	}

	function updateAccountLoginStatus(){
		web3.eth.getAccounts(function(err, accounts)
		{
		    if (err){
				console.error("An error occurred: " + err);
			} 
		    else if (accounts.length == 0){
		     	// sweetAlert('Error', 'Please login to MetaMask..!', 'error');
		     	window.location = 'index.php';
		     	// $("#currentUserAddress").html('').html("0x0000000000000000000000000000000000000000");
			}
			else{
		    	initAccountDetails();
		    }	
		});
	}