var globIcoAddress = {
	'CoffeeMain': "0xed19118faf41505aa39f68d8db05311970ebface",
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

	initContract();
});

function initContract()
{
	globMainContract = new web3.eth.Contract(CoffeeSupplyChainAbi,globIcoAddress.CoffeeMain);	
	$(window).trigger("mainContractReady");
}