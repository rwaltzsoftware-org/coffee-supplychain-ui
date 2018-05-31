var batchNo;
window.addEventListener('load', function() 
{	
	batchNo = $("#batchNo").val();

	if(batchNo!="" || batchNo!=null || batchNo!=undefined){
		
		getCultivationData(globMainContract,batchNo,function(result)
		{
			
			var parentSection = $("#cultivationSection");
			var activityName =  "PerformCultivation";

			/* To Get Timestamp */

			populateSection(parentSection,result,activityName,batchNo)

	                                 
		});

		getFarmInspectorData(globMainContract,batchNo,function(result){
			var farmInspactorData = '';
			var coffeeFamily      = result.coffeeFamily;
			var typeOfSeed        = result.typeOfSeed;
			var fertilizerUsed    = result.fertilizerUsed;	

			if(coffeeFamily!='' && typeOfSeed!='' && fertilizerUsed!=''){
				farmInspactorData =  `<tr>
	                                        <td><b>Coffee Family:</b></td>
	                                        <td>`+coffeeFamily+` <i class="fa fa-check-circle verified_info"></i></td>
	                                      </tr>
	                                      <tr>
	                                        <td><b>Type of Seeds:</b></td>
	                                        <td>`+typeOfSeed+` <i class="fa fa-check-circle verified_info"></i></td>
	                                      </tr>
	                                      <tr>
	                                        <td><b>Fertilizer Used:</b></td>
	                                        <td>`+fertilizerUsed+` <i class="fa fa-check-circle verified_info"></i></td>
	                                      </tr>`;
	        }else{
	        	farmInspactorData = `<tr>
                                            <td colspan="2"><p>Information Not Avilable</p></td>
                                    </tr>`;
	        }   

	        $("#farmInspactorData").html(farmInspactorData);                            
		});

		getHarvesterData(globMainContract,batchNo,function(result){
			var harvesterData = '';
			var cropVariety   = result.cropVariety;
			var tempatureUsed = result.tempatureUsed;
			var humidity      = result.humidity;

			if(cropVariety!='' && tempatureUsed!='' && humidity!=''){
				harvesterData =  `<tr>
	                                    <td><b>Crop Veriety:</b></td>
	                                    <td>`+cropVariety+` <i class="fa fa-check-circle verified_info"></i></td>
	                                  </tr>
	                                  <tr>
	                                    <td><b>Tempature Used:</b></td>
	                                    <td>`+tempatureUsed+` <i class="fa fa-check-circle verified_info"></i></td>
	                                  </tr>
	                                  <tr>
	                                    <td><b>Humidity:</b></td>
	                                    <td>`+humidity+` <i class="fa fa-check-circle verified_info"></i></td>
	                                  </tr>`;
	        }else{
	        	harvesterData = `<tr>
                                            <td colspan="2"><p>Information Not Avilable</p></td>
                                </tr>`;
	        }    

	        $("#harvesterData").html(harvesterData);                         
		});

		getExporterData(globMainContract,batchNo,function(result){
			var exporterData = '';
			var quantity           = result.quantity;
			var destinationAddress = result.destinationAddress;
			var shipName           = result.shipName;
			var shipNo             = result.shipNo;
			var departureDateTime  = result.departureDateTime;
			var estimateDateTime   = result.estimateDateTime;
			var plantNo            = result.plantNo;
			var exporterId         = result.exporterId;

			if(quantity!='' && destinationAddress!='' && shipName!='' && shipNo!='' && departureDateTime!='' && estimateDateTime!='' && plantNo!='' && exporterId!=''){
				exporterData =  `<tr>
	                                <td><b>Quanity:</b></td>
	                                <td>`+quantity+` <i class="fa fa-check-circle verified_info"></i></td>
	                              </tr>
	                              <tr>
	                                <td><b>Destination Address:</b></td>
	                                <td>`+destinationAddress+` <i class="fa fa-check-circle verified_info"></i></td>
	                              </tr>
	                              <tr>
	                                <td><b>Ship Name:</b></td>
	                                <td>`+shipName+` <i class="fa fa-check-circle verified_info"></i></td>
	                              </tr>
	                              <tr>
	                                <td><b>Ship No:</b></td>
	                                <td>`+shipNo+` <i class="fa fa-check-circle verified_info"></i></td>
	                              </tr>
	                              <tr>
	                                <td><b>Departure Date Time:</b></td>
	                                <td>`+departureDateTime+` <i class="fa fa-check-circle verified_info"></i></td>
	                              </tr>
	                              <tr>
	                                <td><b>Estimate Date Time:</b></td>
	                                <td>`+estimateDateTime+` <i class="fa fa-check-circle verified_info"></i></td>
	                              </tr>
	                              <tr>
	                                <td><b>Plant No:</b></td>
	                                <td>`+plantNo+` <i class="fa fa-check-circle verified_info"></i></td>
	                              </tr>
	                              <tr>
	                                <td><b>Exporter Id:</b></td>
	                                <td>`+exporterId+` <i class="fa fa-check-circle verified_info"></i></td>
	                              </tr>`;
        	}else{
	        	exporterData = ` <tr>
                                            <td colspan="2"><p>Information Not Avilable</p></td>
                                </tr>`;
	        }   

	        $("#exporterData").html(exporterData);                 
		});

		getImporterData(globMainContract,batchNo,function(result){
			var importerData = '';
			var quantity         = result.quantity;
			var shipName         = result.shipName;
			var shipNo           = result.shipNo;
			var arrivalDateTime  = result.arrivalDateTime;
			var transportInfo    = result.transportInfo;
			var warehouseName    = result.warehouseName;
			var warehouseAddress = result.warehouseAddress;
			var importerId       = result.importerId;

			if(quantity!='' && shipName!='' && shipNo!='' && arrivalDateTime!='' && transportInfo!='' && warehouseName!='' && warehouseAddress!='' && importerId!=''){
				importerData =  `<tr>
                                    <td><b>Quanity:</b></td>
                                    <td>`+quantity+` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Ship Name:</b></td>
                                    <td>`+shipName+` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Ship No:</b></td>
                                    <td>`+shipNo+` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Arrival Date Time:</b></td>
                                    <td>`+arrivalDateTime+` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Transport Info:</b></td>
                                    <td>`+transportInfo+` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Warehouse Name:</b></td>
                                    <td>`+warehouseName+` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Warehouse Address:</b></td>
                                    <td>`+warehouseAddress+` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Importer Id:</b></td>
                                    <td>`+importerId+` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>`;
            }else{
	        	importerData = ` <tr>
                                            <td colspan="2"><p>Information Not Avilable</p></td>
                                </tr>`;
	        }    

	        $("#importerData").html(importerData);                   
		});

		getProcessorData(globMainContract,batchNo,function(result){
			var processorData = '';
			var quantity         = result.quantity;
			var tempature        = result.tempature;
			var rostingDuration  = result.rostingDuration;
			var internalBatchNo  = result.internalBatchNo;
			var packageDateTime  = result.packageDateTime;
			var processorName    = result.processorName;
			var processorAddress = result.processorAddress;

			if(quantity!='' && tempature!='' && rostingDuration!='' && internalBatchNo!='' && packageDateTime!='' && processorName!='' && processorAddress!=''){
				processorData =  `<tr>
                                    <td><b>Quanity:</b></td>
                                    <td>`+result.quantity+` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Tempature:</b></td>
                                    <td>`+result.tempature+` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Rosting Duration:</b></td>
                                    <td>`+result.rostingDuration+` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Processed Batch No:</b></td>
                                    <td>`+result.internalBatchNo+` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Package Date Time:</b></td>
                                    <td>`+result.packageDateTime+` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Processor Name:</b></td>
                                    <td>`+result.processorName+` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Warehouse Address:</b></td>
                                    <td>`+result.processorAddress+` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>`;
            }else{
	        	processorData = ` <tr>
                                            <td colspan="2"><p>Information Not Avilable</p></td>
                                </tr>`;
	        }    

	        $("#processorData").html(processorData);                   
		});
	}
});

function populateSection(parentSection,result,activityName,batchNo)
{
	getActivityTimestamp(activityName,batchNo, function(dataTime)
	{
		if(dataTime)
		{
			$(parentSection).find(".activityDateTime").html("<i class='fa fa-clock-o'> </i> " + dataTime.toUTCString());
		}
	});

	var built = buildCultivationBlock(result);
	var tmpTimelineBadge = $(parentSection).prev(".timeline-badge");

	if(built.isDataAvail)
	{
		$(tmpTimelineBadge).removeClass("danger").addClass("success");
		$(tmpTimelineBadge).find("i").removeClass().addClass("fa fa-check");
	}


	$(parentSection).find(".activityData").html(built.html); 
}

function getActivityTimestamp(activityName, batchNo, callback)
{
	globMainContract.getPastEvents(activityName,{
		fromBlock:0,
		filter:{batchNo: batchNo}
	},function(error,eventData)
	{
		try
		{
			web3.eth.getBlock(eventData[0].blockNumber,function(error,blockData)
			{
				var date = blockData.timestamp;
				/* Convert Seconds to Miliseconds */
			 	date = new Date(date * 1000);
			 	// $("#cultivationDateTime").html("<i class='fa fa-clock-o'> </i> " + date.toUTCString());

			 	callback(date);
			})	
		}
		catch(e)
		{
			callback(false);
		}
	});
}

function buildCultivationBlock(result)
{
	var cultivationData = {};
	var registrationNo = result.registrationNo;
	var farmerName     = result.farmerName;
	var farmAddress    = result.farmAddress;
	var exporterName   = result.exporterName;
	var importerName   = result.importerName;

	if(registrationNo!='' && farmerName!='' && farmAddress!='' && exporterName!='' && importerName!=''){
		cultivationData.html =  `<tr>
                                <td><b>Registration No:</b></td>
                                <td>`+registrationNo+` <i class="fa fa-check-circle verified_info"></i></td>
                            </tr>
                            <tr>
                                <td><b>Farmer Name:</b></td>
                                <td>`+farmerName+` <i class="fa fa-check-circle verified_info"></i></td>
                            </tr>
                            <tr>
                                <td><b>Farm Address:</b></td>
                                <td>`+farmAddress+` <i class="fa fa-check-circle verified_info"></i></td>
                            </tr>
                            <tr>
                                <td><b>Exporter Name:</b></td>
                                <td>`+exporterName+` <i class="fa fa-check-circle verified_info"></i></td>
                            </tr>
                            <tr>
                                <td><b>Importer Name:</b></td>
                                <td>`+importerName+` <i class="fa fa-check-circle verified_info"></i></td>
                            </tr>`;

        cultivationData.isDataAvail = true;                    
    }else{
    	cultivationData.html = ` <tr>
                                    <td colspan="2"><p>Information Not Avilable</p></td>
                            </tr>`;

        cultivationData.isDataAvail = true;                                        
    }

    return cultivationData;
}