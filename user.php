<?php include('templates/_header.php'); ?>
        

            <div class="container-fluid">
                <div class="row bg-title">
                    <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h4 class="page-title">Dashboard</h4>
                    </div>
                    <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                    </div>
                    <!-- /.col-lg-12 -->
                </div>
                <!-- /.row -->
                <div class="row">
                    <div class="col-md-12 col-xs-12">
                        <div class="white-box">
                            <div class="user-bg"> <img width="100%" alt="user" src="plugins/images/large/img1.jpg">
                                <div class="overlay-box">
                                    <div class="user-content">
                                        <a href="javascript:void(0)"><img src="plugins/images/users/genu.jpg" class="thumb-lg img-circle" alt="img"></a>
                                        <h4 class="text-white" id="userName">--</h4>
                                        <h5 class="text-white" id="currentUserAddress">--</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="user-btm-box">
                                <div class="col-md-4 col-sm-4 text-center">
                                    <p class="text-purple"><i class="fa fa-mobile"></i> Contact No</p>
                                    <h1 id="userContact">--</h1>
                                </div>

                                <div class="col-md-4 col-sm-4 text-center">
                                    <p class="text-blue"><i class="fa fa-user"></i> Role</p>
                                    <h1 id="userRole">--</h1>
                                </div>
                                <div class="col-md-4 col-sm-4 text-center">
                                    <p class="text-danger"><i class="fa fa-gears"></i> Settings</p>
                                    <a class="btn btn-info m-l-20 btn-rounded btn-outline hidden-xs hidden-sm waves-effect waves-light popup-with-form" id="editUser" href="#updateUserForm"  >Edit</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <!--row -->
                <!-- /.row -->
                

                               <!-- row -->
                <div class="row">
                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div class="white-box">
                            <h3 class="box-title">Batches Overview</h3> 
                            <div class="table-responsive">
                                <table class="table product-overview" id="userCultivationTable">
                                    <thead>
                                        <tr>
                                            <th>Batch ID</th>
                                            <th>Farm Inspactor</th>
                                            <th>Harvester</th>
                                            <th>Exporter</th>
                                            <th>Importer</th>
                                            <th>Processor</th>
                                            <th>View</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                         <tr>
                                             <td colspan="7" align="center">No Data Available</td>
                                         </tr> 

                                        <!-- <tr>
                                            <td>#85457898as234ca3fsafa3444234223first</td>
                                            <td>
                                                <a href="view-batch.php"><span class="label label-success font-weight-100">View</span></a>&nbsp;
                                                <a class="popup-with-form" href="#farmInspectionForm" ><span class="label label-success font-weight-100">Update</span></a>
                                            </td>
                                            <td>
                                                <a  href="view-batch.php"><span class="label label-success font-weight-100">View</span></a>&nbsp;
                                                <a class="popup-with-form" href="#harvesterForm"><span class="label label-success font-weight-100">Update</span></a>
                                            </td>
                                            <td>
                                                <a  href="view-batch.php"><span class="label label-success font-weight-100">View</span></a>&nbsp;
                                                <a class="popup-with-form" href="#exporterForm" ><span class="label label-success font-weight-100">Update</span></a>     
                                            </td>
                                            <td>
                                                <a  href="view-batch.php"><span class="label label-success font-weight-100">View</span></a>&nbsp;
                                                <a class="popup-with-form" href="#importerForm" ><span class="label label-success font-weight-100">Update</span></a>                                      
                                            </td>
                                            <td>
                                                <a  href="view-batch.php"><span class="label label-success font-weight-100">View</span></a>&nbsp;
                                                <a class="popup-with-form" href="#processingForm" ><span class="label label-success font-weight-100">Update</span></a> 
                                            </td>
                                        </tr> -->
                                        
                                    </tbody>
                                </table>

                            <!-- Update User Form -->
                            <form id="updateUserForm" class="mfp-hide white-popup-block">
                                <h1>Update User Profile</h1><br>
                                <fieldset style="border:0;">
                                    <div class="form-group">
                                        <label class="control-label" for="fullname">Fullname</label>
                                        <input type="text" class="form-control" id="fullname" name="fullname" placeholder="fullname" data-parsley-required="true">
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="contactNumber">Contact Number</label>
                                        <input type="text" class="form-control" id="contactNumber" name="contactNumber" placeholder="contact number" data-parsley-required="true" data-parsley-type="digits" data-parsley-length="[10, 15]" maxlength="15">
                                    </div>                              
                                    <div class="form-group">
                                        <label class="control-label" for="role">User Role</label>
                                       <!--  <input type="text" class="form-control" id="role" name="role" placeholder="Select User Role" required=""> -->
                                       <select class="form-control" id="role" name="role" data-parsley-required="true">
                                           <option value="" disabled selected>Select User Role</option>
                                           <option value="SUPER_ADMIN">SUPER_ADMIN</option>
                                           <option value="FARM_INSPECTION">FARM_INSPECTION</option>
                                           <option value="HARVESTER">HARVESTER</option>
                                           <option value="EXPORTER">EXPORTER</option>
                                           <option value="IMPORTER">IMPORTER</option>
                                           <option value="PROCESSOR">PROCESSOR</option>
                                       </select>

                                    </div>
                                     <div class="form-group">
                                        <label class="control-label" for="role">User Status</label>
                                       <!--  <input type="text" class="form-control" id="role" name="role" placeholder="Select User Role" required=""> -->&nbsp;&nbsp;&nbsp;
                                       <input type="radio" name="status" value="true" data-parsley-required="true" 
                                       /> TRUE &nbsp;&nbsp;
                                       <input type="radio" name="status" value="false"/> FALSE
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="profileHash">Profile Hash</label>
                                        <input type="text" class="form-control" id="profileHash" name="profileHash" placeholder="Profile Hash" data-parsley-required="true">
                                    </div>
                                     <div class="form-group float-right">
                                       <button type="reset" class="btn btn-default waves-effect">Reset</button>
                                        <button type="button" id="updateUser" class="btn btn-primary">Submit</button>
                                    </div>
                                </fieldset>
                            </form>

                            <!-- Farm Inspection Form -->
                            <form id="farmInspectionForm" class="mfp-hide white-popup-block">
                                <h1>Farm Inspection</h1><br>
                                <fieldset style="border:0;">
                                    <!-- <div class="form-group">
                                        <label class="control-label" for="InspectorId">Inspector ID Number</label>
                                        <input type="text" class="form-control" id="InspectorId" name="inspectorId" placeholder="inspector id number" data-parsley-required="true">
                                    </div>   -->                            
                                    <div class="form-group">
                                        <label class="control-label" for="typeOfSeed">Type of Seed</label>
                                        <input type="text" class="form-control" id="typeOfSeed" name="typeOfSeed" placeholder="type of seed" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="coffeeFamily">Coffee Family</label>
                                        <input type="text" class="form-control" id="coffeeFamily" name="coffeeFamily" placeholder="coffee family" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="fertilizer">Fertilizer Used</label>
                                        <input type="text" class="form-control" id="fertilizerUsed" name="fertilizer" placeholder="fertilizer used" data-parsley-required="true">
                                    </div>
                                     <div class="form-group float-right">
                                        <button type="reset" class="btn btn-default waves-effect" >Reset</button>
                                        <button type="button" id="updateFarmInspection" class="btn btn-primary">Submit</button>
                                    </div>
                                </fieldset>
                            </form>

                             <!-- Harvesting Form -->
                            <form id="harvesterForm" class="mfp-hide white-popup-block ">
                                <h1>Harvesting</h1><br>
                                <fieldset style="border:0;">
                                                            
                                    <div class="form-group">
                                        <label class="control-label" for="cropVariety">Coffee Variety</label>
                                        <input type="text" class="form-control" id="cropVariety" name="cropVariety" placeholder="coffee variety" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="tempatureUsed">Temperature (in Fahrenheit)</label>
                                        <input type="text" class="form-control" id="tempatureUsed" name="tempatureUsed" placeholder="temperature" data-parsley-required="true">
                                    </div>
                                     <div class="form-group">
                                        <label class="control-label" for="humidity">Humidity</label>
                                        <input type="text" class="form-control" id="humidity" name="humidity" placeholder="humidity" data-parsley-required="true">
                                    </div>                                
                                    <div class="form-group float-right">
                                        <button type="reset" class="btn btn-default waves-effect">Reset</button>
                                        <button type="button" id="updateHarvest"class="btn btn-primary">Submit</button>
                                    </div>
                                </fieldset>
                            </form>

                            <!-- Exporter Form -->
                            <form id="exporterForm" class="mfp-hide white-popup-block">
                                <h1>Exporting</h1><br>
                                <fieldset style="border:0;">

                                    <div class="form-group">
                                        <label class="control-label" for="quantity">Quantity</label>
                                        <input type="number" min="1" class="form-control" id="quantity" name="quantity" placeholder="Quantity" data-parsley-required="true">
                                    </div> 

                                    <div class="form-group">
                                        <label class="control-label" for="destinationAddress">Destination Address</label>
                                        <input type="text" class="form-control" id="destinationAddress" name="destinationAddress" placeholder="Destination Address" data-parsley-required="true">
                                    </div> 


                                    <div class="form-group">
                                        <label class="control-label" for="shipName">Ship Name</label>
                                        <input type="text" class="form-control" id="shipName" name="shipName" placeholder="Ship Name" data-parsley-required="true">
                                    </div> 

                                    <div class="form-group">
                                        <label class="control-label" for="shipNo">Ship No</label>
                                        <input type="text" class="form-control" id="shipNo" name="shipNo" placeholder="Ship No" data-parsley-required="true">
                                    </div> 

                                    <div class="form-group">
                                        <label class="control-label datepicker-autoclose" for="estimateDateTime">Estimate Datetime</label>
                                        <input type="text" class="form-control datepicker-autoclose" id="estimateDateTime" name="estimateDateTime" placeholder="Estimate Datetime" data-parsley-required="true">
                                    </div>

                                    

                                     <div class="form-group">
                                        <label class="control-label" for="exporterId">Exporter ID</label>
                                        <input type="text" class="form-control" id="exporterId" name="exporterId" placeholder="Exporter ID" data-parsley-required="true">
                                    </div>


                                     <div class="form-group float-right">
                                        <button type="reset" class="btn btn-default waves-effect">Reset</button>
                                        <button type="button" id="updateExport"class="btn btn-primary">Submit</button>
                                    </div>
                                </fieldset>
                            </form>

                            <!-- Importer Form -->
                            <form id="importerForm" class="mfp-hide white-popup-block">
                                <h1>Importing</h1><br>
                                <fieldset style="border:0;">

                                    <div class="form-group">
                                        <label class="control-label" for="quantity">Quantity</label>
                                        <input type="number" min="1" class="form-control" id="quantity" name="quantity" placeholder="Quantity" data-parsley-required="true">
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label" for="shipName">Ship Name</label>
                                        <input type="text" class="form-control" id="shipName" name="shipName" placeholder="Ship Name" data-parsley-required="true">
                                    </div> 

                                    <div class="form-group">
                                        <label class="control-label" for="shipNo">Ship No</label>
                                        <input type="text" class="form-control" id="shipNo" name="shipNo" placeholder="Ship No" data-parsley-required="true">
                                    </div> 

                                    <div class="form-group">
                                        <label class="control-label" for="transportInfo">Transport Info</label>
                                        <input type="text" class="form-control" id="transportInfo" name="transportInfo" placeholder="Transport Info" data-parsley-required="true">
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="warehouseName">Warehouse Name</label>
                                        <input type="text" class="form-control" id="warehouseName" name="warehouseName" placeholder="Warehouse Name" data-parsley-required="true">
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="warehouseAddress">Warehouse Address</label>
                                        <input type="text" class="form-control" id="warehouseAddress" name="warehouseAddress" placeholder="Warehouse Address" data-parsley-required="true" >
                                    </div>                              
                                    <div class="form-group">
                                        <label class="control-label" for="importerId">Importer Id</label>
                                        <input type="number" min="1" class="form-control" id="importerId" name="importerId" placeholder="Importer Id" data-parsley-required="true" >
                                    </div>                              
                                    
                                     <div class="form-group float-right">
                                        <button type="reset" class="btn btn-default waves-effect">Reset</button>
                                        <button type="button" id="updateImport"class="btn btn-primary">Submit</button>
                                    </div>
                                </fieldset>
                            </form>

                            <!-- Processor Form -->
                            <form id="processingForm" class="mfp-hide white-popup-block">
                                <h1>Processing</h1><br>
                                <fieldset style="border:0;">
                                    <div class="form-group">
                                        <label class="control-label" for="quantity">Quantity</label>
                                        <input type="number" min="1" class="form-control" id="quantity" name="quantity" placeholder="Quantity" data-parsley-required="true">
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="processingTemperature">Temperature (in Fahrenheit)</label>
                                        <input type="text" class="form-control" id="processingTemperature" name="temperature" placeholder="Temperature" data-parsley-required="true">
                                    </div>                              
                                    <div class="form-group">
                                        <label class="control-label" for="rostingDuration">Time for Roasting</label>
                                        <input type="number" min="1" class="form-control" id="rostingDuration" name="rostingDuration" placeholder="Time for roasting" data-parsley-required="true" >
                                    </div>
                               
                                    <div class="form-group">
                                        <label class="control-label" for="internalBatchNo">Internal Batch no</label>
                                        <input type="text" class="form-control" id="internalBatchNo" name="internalBatchNo" placeholder="Internal Batch no" data-parsley-required="true">
                                    </div>
                           
                                    <div class="form-group">
                                        <label class="control-label" for="packageDateTime">Packaging Date</label>
                                        <input type="text" class="form-control datepicker-autoclose" id="packageDateTime" name="packageDateTime" placeholder="Packaging Date" data-parsley-required="true">
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="processorName">Processor Name</label>
                                        <input type="text" class="form-control" id="processorName" name="processorName" placeholder="Processor Name" data-parsley-required="true">
                                    </div>                              
                                    <div class="form-group">
                                        <label class="control-label" for="processorAddress">Processor Address</label>
                                        <input type="text" class="form-control" id="processorAddress" name="processorAddress" placeholder="Processor Address" data-parsley-required="true">
                                    </div>
                                     <div class="form-group float-right">
                                        <button type="reset" class="btn btn-default waves-effect">Reset</button>
                                        <button type="button" id="updateProcessor"class="btn btn-primary">Submit</button>
                                    </div>
                                </fieldset>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
            <!-- /.container-fluid -->

        <script type="text/javascript">

        </script>
        
<?php include('templates/_footer.php');?>   