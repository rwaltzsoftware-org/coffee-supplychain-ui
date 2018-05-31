
$(window).on("coinbaseReady", function ()
{
    getUser(globUserContract, function(data){
    //   console.log(data);
       $("#userName").html(data.name);
       $("#userContact").html(data.contactNo);
       $("#userRole").html(data.role);
    });
});

$("#updateUser").on('click',function(){

  getUser(globUserContract, function(data){
       
       $("#fullname").val(data.name);
       $("#contactNumber").val(data.contactNo);
       $("#role").val(data.role);

       if(data.isActive)
       {
          $('input:radio[name=status][value=true]').trigger("click");
       }else
       {
          $('input:radio[name=status][value=false]').trigger("click");
       }

       $("#profileHash").val(data.profileHash);

    });
});

$("#submitProfile").on('click',function(){

    if(userForm.validate())
    {
      var fullname = $("#fullname").val();
      var contactNumber = $("#contactNumber").val();
      var role = $("#role").val();
      var userStatus = $("input[name=status]:checked").val();
      var profileHash = $("#profileHash").val();

      userStatus = userStatus == "true" ? true : false;

      var userDetails = {
        fullname : fullname,
        contact : contactNumber,
        role : role,
        status : userStatus,
        profile : profileHash
      };    

      updateUser(globUserContract, userDetails); 
    }
});









function updateUser(contractRef,data)
{
  //contractRef.methods.updateUser("Swapnali","9578774787","HARVESTER",true,"0x74657374")
  contractRef.methods.updateUser(data.fullname, data.contact,data.role, data.status, web3.utils.fromAscii(data.profile))
  .send({from:globCoinbase,to:contractRef.address})
  .on('transactionHash',function(hash)
        {
            handleTransactionResponse(hash);
        })
        .on('receipt',function(receipt)
        {
            receiptMessage = "User Profile Updated Succussfully";
            handleTransactionReceipt(receipt,receiptMessage)
        })
        .on('error',function(error)
        {
            handleGenericError(error.message);
            return;     
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