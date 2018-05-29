
$(window).on("coinbaseReady", function ()
{
    // updateUser(globMainContract);  

    getUser(globMainContract, function(data){
    //   console.log(data);
       $("#userName").html(data.name);
       $("#userContact").html(data.contactNo);
       $("#userRole").html(data.role);
    });

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

    // console.log(result);
  });  
}

function getUser(contractRef,callback)
{
   contractRef.methods.getUser(globCoinbase).call(function (error, result) {
        if(error){
            alert("Unable to get User" + error);    
        }

        newUser = result;

        if (callback)
        {
            callback(newUser);
        }        
    });
}