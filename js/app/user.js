
$(window).on("coinbaseReady", function ()
{
    getUser(globMainContract, function(data){
    //   console.log(data);
       $("#userName").html(data.name);
       $("#userContact").html(data.contactNo);
       $("#userRole").html(data.role);
    });
});

$("#updateUser").on('click',function(){

  getUser(globMainContract, function(data){
       
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

      updateUser(globMainContract, userDetails); 
    }
});

function updateUser(contractRef,data)
{
  //contractRef.methods.updateUser("Swapnali","9578774787","HARVESTER",true,"0x74657374")
  // check 
  contractRef.methods.updateUser(data.fullname, data.contact,data.role, data.status, web3.utils.toAscii(data.profile))
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

ipfs = window.IpfsApi('localhost', 5001); // Connect to IPFS

function handleFileUpload(event) {
      const file = event.target.files[0];

      let reader = new window.FileReader();
      reader.onloadend = function () {
        saveToIpfs(reader)
      }

      reader.readAsArrayBuffer(file)
}

function saveToIpfs(reader) {
      let ipfsId;

      const Buffer = window.IpfsApi().Buffer;
      const buffer = Buffer.from(reader.result);

      ipfs.files.add(buffer, (err, result) => { // Upload buffer to IPFS
        if (err) {
          console.error(err)
          return
}
        console.log(result);
        console.log(result[0].hash);

         $("#profileHash").val(result[0].hash);
  /* setHash(contract, result[0].hash, function (finalResult) {
          console.log(finalResult)
          getHash(contract,function(returnHash){
              console.log(returnHash)
          });         
        });*/
      })
}