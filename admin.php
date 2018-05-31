<?php include('templates/_header.php'); ?>
        

            <div class="container-fluid">
                <div class="row bg-title">
                    <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h4 class="page-title">Dashboard</h4>
                    </div>
                    <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                        <div id="linkOngoingTransaction"></div>
                    </div>
                    <!-- /.col-lg-12 -->
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="alert alert-info" id="divOngoingTransaction" style="display: none">Ongoing Transaction: <span id="linkOngoingTransaction">None</span> </div>
                    </div>    
                </div>

                <!-- /.row -->
                <div class="row">
                    <div class="col-lg-4 col-sm-6 ">
                        <div class="white-box">
                            <h3 class="box-title">Users</h3>
                            <ul class="list-inline two-part">
                                <li><i class="icon-user text-info"></i></li>
                                <li class="text-right"><span class="counter text-info" id="totalUsers">0</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 ">
                        <div class="white-box">
                            <h3 class="box-title">Total Roles</h3>
                            <ul class="list-inline two-part">
                                <li><i class="icon-graduation text-purple"></i></li>
                                <li class="text-right "><span class="counter text-purple">5</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 ">
                        <div class="white-box">
                            <h3 class="box-title">Total Batches</h3>
                            <ul class="list-inline two-part">
                                <li><i class="icon-doc text-success"></i></li>
                                <li class="text-right"><span class="counter text-success">15</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--row -->
                <!-- /.row -->
                

                               <!-- row -->
                <div class="row">
                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div class="white-box">
                             <a href="#batchForm" class="btn btn-info pull-right m-l-20 btn-rounded btn-outline hidden-xs hidden-sm waves-effect waves-light popup-with-form">Create Batch</a>
                            <h3 class="box-title">Batches Overview</h3> 
                            <div class="table-responsive">
                                <table class="table product-overview" id="adminCultivationTable">
                                    <thead>
                                        <tr>
                                            <th>Batch ID</th>
                                            <th>Farm Inspactor</th>
                                            <th>Harvester</th>
                                            <th>Exporter</th>
                                            <th>Importer</th>
                                            <th>Processor</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#85457898as234ca3fsafa3444234223</td>
                                            <td><span class="label label-success font-weight-100">Compilited</span>
                                            </td>
                                            <td><span class="label label-warning font-weight-100">Processing</span> </td>
                                            <td><span class="label label-danger font-weight-100">Not Available</span> </td>
                                            <td><span class="label label-danger font-weight-100">Not Available</span> </td>
                                            <td><span class="label label-danger font-weight-100">Not Available</span> </td>
                                            <td><a href="view-batch.php" class="text-inverse p-r-10" data-toggle="tooltip" title="View"><i class="ti-eye"></i></a> </td>
                                        </tr>
                                         <tr>
                                            <td>#8545735sf32as234ca3fsafa3444234223</td>
                                            <td><span class="label label-success font-weight-100">Compilited</span></td>
                                            <td><span class="label label-success font-weight-100">Compilited</span> </td>
                                            <td><span class="label label-warning font-weight-100">Processing</span>  </td>
                                            <td><span class="label label-danger font-weight-100">Not Available</span> </td>
                                            <td><span class="label label-danger font-weight-100">Not Available</span> </td>
                                            <td><a href="view-batch.php" class="text-inverse p-r-10" data-toggle="tooltip" title="View"><i class="ti-eye"></i></a> </td>
                                        </tr>
                                        <tr>
                                            <td>#8545735sf32as234ca3fs54asf2444234223</td>
                                            <td><span class="label label-success font-weight-100">Compilited</span></td>
                                            <td><span class="label label-success font-weight-100">Compilited</span> </td>
                                            <td><span class="label label-success font-weight-100">Compilited</span>  </td>
                                            <td><span class="label label-success font-weight-100">Compilited</span> </td>
                                            <td><span class="label label-success font-weight-100">Compilited</span> </td>
                                            <td><a href="view-batch.php" class="text-inverse p-r-10" data-toggle="tooltip" title="View"><i class="ti-eye"></i></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6 col-sm-6 col-xs-12">
                        <div class="white-box">
                            <h3 class="box-title">Your Address <i class="fa fa-qrcode fa-2x text-info"></i></h3>
                            <ul class="list-inline two-part">
                                <li class="text-right" id="currentUserAddress">0xab0874cb61d83f6b67dc08141568868102233bef</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-xs-12">
                        <div class="white-box">
                           <h3 class="box-title">Contract Address <i class="fa fa-qrcode fa-2x text-info"></i></h3>
                            <ul class="list-inline two-part">
                                <li class="text-right">0x8072e44fb7528e8f54907da93c318402c959eb7f</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!--row -->
                <div class="row">
                    <div class="col-md-12 col-lg-4 col-sm-12">
                        <div class="white-box">
                            <h3 class="box-title">User Roles</h3> 
                            <div class="table-responsive">
                                <table class="table product-overview">
                                    <thead>
                                        <tr>
                                            <th>Role Name</th>
                                            <th>Role Slug</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Farm Inspection</td>
                                            <td><span class="label label-info font-weight-100">FARM_INSPECTION</span></td>
                                        </tr>
                                         <tr>
                                            <td>Harvester</td>
                                            <td><span class="label label-success font-weight-100">HARVESTER</span></td>
                                        </tr>
                                        <tr>
                                            <td>Exporter</td>
                                            <td><span class="label label-warning font-weight-100">EXPORTER</span></td>
                                        </tr>
                                        <tr>
                                            <td>Importer</td>
                                            <td><span class="label label-danger font-weight-100">IMPORTER</span></td>
                                        </tr>
                                        <tr>
                                            <td>Processor</td>
                                            <td><span class="label label-primary font-weight-100">PROCESSOR</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-8 col-sm-12">
                        <div class="white-box">
                             <a href="javascript:void(0);" id="userFormClick" class="btn btn-info pull-right m-l-20 btn-rounded btn-outline hidden-xs hidden-sm waves-effect waves-light">Create User</a>
                            <h3 class="box-title">Users</h3> 
                            <div class="table-responsive">
                                <table class="table product-overview" id="tblUser">
                                    <thead>
                                        <tr>
                                            <th>User Address</th>
                                            <th>Name</th>
                                            <th>Contact No.</th>
                                            <th>Role</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.row -->
  
            </div>
            <!-- /.container-fluid -->

            <form id="batchForm" class="mfp-hide white-popup-block reset">
                <h1>Add batch</h1><br>
                <fieldset style="border:0;">
                    <div class="form-group">
                        <label class="control-label" for="farmerRegistrationNo">Farmer Registration No <i class="red">*</i></label>
                        <input type="text" class="form-control" id="farmerRegistrationNo" name="farmerRegistrationNo" placeholder="Registration No" data-parsley-required="true">
                    </div> 
                    <div class="form-group">
                        <label class="control-label" for="farmerName">Farmer Name <i class="red">*</i></label>
                        <input type="text" class="form-control" id="farmerName" name="farmerName" placeholder="Farmer Name" data-parsley-required="true">
                    </div>                              
                    <div class="form-group">
                        <label class="control-label" for="farmerAddress">Farmer Address <i class="red">*</i></label>
                        <textarea class="form-control" id="farmerAddress" name="farmerAddress" placeholder="Farmer Address" data-parsley-required="true"></textarea>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="exporterName">Exporter Name <i class="red">*</i></label>
                        <input type="text" class="form-control" id="exporterName" name="exporterName" placeholder="Exporter Name" data-parsley-required="true">
                    </div> 
                    <div class="form-group">
                        <label class="control-label" for="importerName">Importer Name <i class="red">*</i></label>
                        <input type="text" class="form-control" id="importerName" name="importerName" placeholder="Importer Name" data-parsley-required="true">
                    </div> 
                     <div class="form-group float-right">
                        <button type="button" class="btn btn-primary">Submit</button>
                    </div>
                </fieldset>
            </form>

            <div id="userFormModel" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none; padding-top: 170px;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h2 class="modal-title" id="userModelTitle">Add User</h2>
                        </div>
                        <div class="modal-body">
                            <form id="userForm" onsubmit="return false;">
                                <fieldset style="border:0;">
                                    <div class="form-group">
                                        <label class="control-label" for="userWalletAddress">User Wallet Address <i class="red">*</i></label>
                                        <input type="text" class="form-control" id="userWalletAddress" name="userWalletAddress" placeholder="Wallet Address" data-parsley-required="true" minlength="42" maxlength="42">
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="userName">User Name <i class="red">*</i></label>
                                        <input type="text" class="form-control" id="userName" name="userName" placeholder="Name" data-parsley-required="true">
                                    </div>                              
                                    <div class="form-group">
                                        <label class="control-label" for="userContactNo">User Contact <i class="red">*</i></label>
                                        <input type="text" class="form-control" id="userContactNo" name="userContactNo" placeholder="Contact No." data-parsley-required="true" data-parsley-type="digits" data-parsley-length="[10, 15]" maxlength="15">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="userRoles">User Role <i class="red">*</i></label>
                                        <select class="form-control" id="userRoles" name="userRoles" data-parsley-required="true">
                                            <option value="">Select Role</option>
                                            <option value="FARM_INSPECTION">Farm Inspection</option>
                                            <option value="HARVESTER">Harvester</option>
                                            <option value="EXPORTER">Exporter</option>
                                            <option value="IMPORTER">Importer</option>
                                            <option value="PROCESSOR">Processor</option>
                                        </select>    
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="isActive">User Status</label>
                                        <input type="checkbox" class="js-switch" data-color="#99d683" data-secondary-color="#f96262" id="isActive" name="isActive" data-size="small"/>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="userContactNo">Profile Image Hash <i class="red">*</i></label>
                                        <input type="text" class="form-control" id="userProfileHash" name="userProfileHash" placeholder="User Profile Hash" data-parsley-required="true" >
                                    </div>
                                </fieldset>
                            
                        </div>
                        <div class="modal-footer">
                             <button type="submit" onclick="userFormSubmit();" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            
            

        <script type="text/javascript">
            var batchFormInstance, userFormInstance;
            $(document).ready(function(){
                userFormInstance = $("#userForm").parsley();
                batchFormInstance = $("#batchForm").parsley();

                initSwitch();
            });

            function initSwitch(){
                /*For User Form Pop Up*/
                new Switchery($("#isActive")[0], $("#isActive").data());     
            }
        </script>

<?php include('templates/_footer.php');?>            