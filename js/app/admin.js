/* Vikas Code Starts */

$(window).on('coinbaseReady',function(){
	getAllEvents(globMainContract);
});

function userFormSubmit(){
	if($("form#userFormAdd").parsley().isValid()){

		// var 

		globMainContract.methods.updateUser()
		.send({from:globCoinbase, to:globMainContract._address})
		.on('transactionHash',function(hash){
			 handleTransactionResponse(hash);
		})
		.on('receipt', function(receipt){
			receiptMessage = "User Created Successfully";
      		handleTransactionReceipt(receipt,receiptMessage)
		})
		.on('error',function(error)
		{
		    handleGenericError(error.message);
		    return;   
		});
	}
}

/* Vikas Code Ends */


/* Nitish Code Starts */



/* Nitish Code Ends */

