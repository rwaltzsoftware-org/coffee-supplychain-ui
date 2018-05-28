
$(window).on("mainContractReady", function ()
{
    // updateUser(globMainContract);  
});

function updateUser(contractRef)
{
  contractRef.methods.updateUser("Swapnali","9578774787","HARVESTER",true,"0x74657374")
  .send({from:globCoinbase,to:contractRef.address})
  .on(function(error,result){
    if(error)
    {
      alert(error);
    }

    console.log(result);
  });  
}

/*function getUser(contractRef,callback)
{
   contractRef.methods.getUser(coinbase).call(function (error, result) {
        if(error){
            alert("Unable to get User");
        }

        newUser = coinbase;

        if (callback)
        {
            callback(newUser);
        }        
    });
}*/