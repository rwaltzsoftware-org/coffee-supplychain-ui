	var SupplyChainStorageAddress = "0xed19118faf41505aa39f68d8db05311970ebface";

	function initContract()
	{
		contract = new web3.eth.Contract(SupplyChainStorageAbi,SupplyChainStorageAddress);	

		console.log(contract);

		$(window).trigger("contractReady");
	}