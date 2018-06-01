
$(window).on('coinbaseReady',function(){
	getUserEvents(globUserContract);
	getCultivationEvents(globMainContract);
});

function userFormSubmit(){

	if($("form#userForm").parsley().isValid()){

		var userWalletAddress = $("#userWalletAddress").val();
		var userName          = $("#userName").val();
		var userContactNo     = $("#userContactNo").val();
		var userRoles         = $("#userRoles").val();
		var isActive          = $("#isActive").is(":checked");
		var userImageAddress  = $("#userProfileHash").val();

		globUserContract.methods.updateUserForAdmin(userWalletAddress,userName,userContactNo,userRoles,isActive,userImageAddress)
		.send({from:globCoinbase, to:globUserContract._address})
		.on('transactionHash',function(hash){
			 handleTransactionResponse(hash);
			 $("#userFormModel").modal('hide');
		})
		.on('receipt', function(receipt){
			receiptMessage = "User Created Successfully";
      		handleTransactionReceipt(receipt,receiptMessage);
      		$("#userFormModel").modal('hide');
      		getUserEvents(globUserContract);
		})
		.on('error',function(error)
		{
		    handleGenericError(error.message);
		    return;   
		});
	}
}

function addCultivationBatch()
{

    if (batchFormInstance.validate())
    {
        var farmerRegistrationNo = $("#farmerRegistrationNo").val().trim();
        var farmerName = $("#farmerName").val().trim();
        var farmerAddress = $("#farmerAddress").val().trim();
        var exporterName = $("#exporterName").val().trim();
        var importerName = $("#importerName").val().trim();

        globMainContract.methods.addBasicDetails(farmerRegistrationNo, farmerName, farmerAddress, exporterName, importerName)
        .send({
            from: globCoinbase,
            to: globMainContract._address
        })
        .on('transactionHash', function (hash) {
            handleTransactionResponse(hash);
            $("#batchFormModel").modal('hide');
        })
        .on('receipt', function (receipt) {
            receiptMessage = "Token Transferred Successfully";
            handleTransactionReceipt(receipt, receiptMessage);
            $("#batchFormModel").modal('hide');
            getCultivationEvents(globMainContract);
        })
        .on('error', function (error) {
            handleGenericError(error.message);
            return;
        });
    }
}


function getCultivationEvents(contractRef) {
    contractRef.getPastEvents('PerformCultivation', {
        fromBlock: 0
    }).then(function (events) 
    {
    	$("#totalBatch").html(events.length);
    	counterInit();

        var finalEvents = [];
        $.each(events,function(index,elem)
        {
            var tmpData = {};
            tmpData.batchNo = elem.returnValues.batchNo;
            getBatchStatus(contractRef, tmpData.batchNo).then(result => {
                tmpData.status = result;

                finalEvents.push(tmpData);
            });
        });

        setTimeout(function()
        {
        	if(finalEvents.length > 0){
	            var table = buildCultivationTable(finalEvents);
	            $("#adminCultivationTable").find("tbody").html(table);
	        }    
        },1000); 

        // $("#transactions tbody").html(buildTransactionData(events));
    }).catch(error => {
        console.log(error)
    });
}

function buildCultivationTable(finalEvents)
{
    var table = "";
    
    for (var tmpDataIndex in finalEvents)
    {   
        var elem = finalEvents[tmpDataIndex];
        var batchNo = elem.batchNo;
        var tr = "";
        if (elem.status == "FARM_INSPECTION") {
            tr = `<tr>
                    <td>`+batchNo+`</td>
                    <td><span class="label label-success font-weight-100">Compeleted</span></td>
                    <td><span class="label label-warning font-weight-100">Processing</span> </td>
                    <td><span class="label label-danger font-weight-100">Not Available</span> </td>
                    <td><span class="label label-danger font-weight-100">Not Available</span> </td>
                    <td><span class="label label-danger font-weight-100">Not Available</span> </td>
                    <td><a href="view-batch.php?batchNo=`+batchNo+`" target="_blank" class="text-inverse p-r-10" data-toggle="tooltip" title="View"><i class="ti-eye"></i></a> </td>
                </tr>`;
        } else if (elem.status == "HARVESTER") {
            tr = `<tr>
                    <td>`+batchNo+`</td>
                    <td><span class="label label-success font-weight-100">Compeleted</span></td>
                    <td><span class="label label-success font-weight-100">Compeleted</span> </td>
                    <td><span class="label label-warning font-weight-100">Processing</span> </td>
                    <td><span class="label label-danger font-weight-100">Not Available</span> </td>
                    <td><span class="label label-danger font-weight-100">Not Available</span> </td>
                    <td><a href="view-batch.php?batchNo=`+batchNo+`" target="_blank" class="text-inverse p-r-10" data-toggle="tooltip" title="View"><i class="ti-eye"></i></a> </td>
                </tr>`;
        } else if (elem.status == "EXPORTER") {
            tr = `<tr>
                    <td>`+batchNo+`</td>
                    <td><span class="label label-success font-weight-100">Compeleted</span></td>
                    <td><span class="label label-success font-weight-100">Compeleted</span> </td>
                    <td><span class="label label-success font-weight-100">Compeleted</span> </td>
                    <td><span class="label label-warning font-weight-100">Processing</span> </td>
                    <td><span class="label label-danger font-weight-100">Not Available</span> </td>
                    <td><a href="view-batch.php?batchNo=`+batchNo+`" target="_blank" class="text-inverse p-r-10" data-toggle="tooltip" title="View"><i class="ti-eye"></i></a> </td>
                </tr>`;
        } else if (elem.status == "IMPORTER") {
            tr = `<tr>
                    <td>`+batchNo+`</td>
                    <td><span class="label label-success font-weight-100">Compeleted</span></td>
                    <td><span class="label label-success font-weight-100">Compeleted</span> </td>
                    <td><span class="label label-success font-weight-100">Compeleted</span> </td>
                    <td><span class="label label-success font-weight-100">Compeleted</span> </td>
                    <td><span class="label label-warning font-weight-100">Processing</span> </td>
                    <td><a href="view-batch.php?batchNo=`+batchNo+`" target="_blank" class="text-inverse p-r-10" data-toggle="tooltip" title="View"><i class="ti-eye"></i></a> </td>
                </tr>`;
        } else if (elem.status == "PROCESSOR") {
            tr = `<tr>
                    <td>`+batchNo+`</td>
                    <td><span class="label label-success font-weight-100">Compeleted</span></td>
                    <td><span class="label label-success font-weight-100">Compeleted</span> </td>
                    <td><span class="label label-success font-weight-100">Compeleted</span> </td>
                    <td><span class="label label-success font-weight-100">Compeleted</span> </td>
                    <td><span class="label label-success font-weight-100">Compeleted</span> </td>
                    <td><a href="view-batch.php?batchNo=`+batchNo+`" target="_blank" class="text-inverse p-r-10" data-toggle="tooltip" title="View"><i class="ti-eye"></i></a> </td>
                </tr>`;
        }

        table+=tr;
    }

    return table;
    
}

function getBatchStatus(contractRef, batchNo)
{
    return contractRef.methods.getNextAction(batchNo)
        .call();
       
}


