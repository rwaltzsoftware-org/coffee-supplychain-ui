	var globIcoAddress = {
		// 'CoffeeMain': "0x8072e44fb7528e8f54907da93c318402c959eb7f",
		'CoffeeMain': "0xa5d0a05561261e41dbe4931cb5fb6a7ec51c9c9b",
	};

	var globMainContract = false;
	var globCoinbase = false;	

	window.addEventListener('load', function() 
	{  
		if (typeof web3 !== 'undefined') 
		{
		  web3 = new Web3(web3.currentProvider);
		  // web3 = new Web3("https://rinkeby.infura.io/8U0AE4DUGSh8lVO3zmma");
		} else {
		  // set the provider you want from Web3.providers
		  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
		}
		
		getCurrentAccountAddress((address) => {
			/*  To Restrict User in Admin Section */
			var currentPath = window.location.pathname;
			var tmpStack = currentPath.split("/");
			var currentPanel = tmpStack.pop();


			if (currentPanel == "admin.php") {
				if (err) {
					console.error("An error occurred: " + err);
				} else if (accounts.length == 0) {

					// sweetAlert('Error', 'Please login to MetaMask..!', 'error');
					// window.location = 'index.php';
					// $("#currentUserAddress").html('').html("0x0000000000000000000000000000000000000000");
				}
			}
		});

		initContract();

		/* setInterval(function () {
			updateLoginAccountStatus();
		}, 500); */
		
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

	



/*Vikas - Start*/

function getAllEvents(contractRef)
{
	contractRef.events.UserUpdate({
	    fromBlock: 0
	    // toBlock: 'latest'
	}, function(error, event){
		console.log("event : ",event);
		console.log("error : ",error);
	});

}

/*Vikas -End*/
