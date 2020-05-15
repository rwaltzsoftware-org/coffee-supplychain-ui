<?php include('templates/_header.php');?>
<?php 
     if(!isset($_GET['batchNo']) || (isset($_GET['batchNo']) && $_GET['batchNo']=='') &&
        !isset($_GET['txn']) || (isset($_GET['txn']) && $_GET['txn']=='')){
        echo "<script>window.location = 'index.php';</script>";
     }   
?>
<style type="text/css">
    .verified_info{
        color: green;
    }
    .white-box{
        padding: 0; 
        background: #edf1f5;
    }
    .no-gutters {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }
    .timeline>li>.timeline-panel{
        background-color: #fff;
        color: #2b2b2b;
    }
    .timeline:before {
        background-color: rgba(0, 0, 0, 0.1);
    }
    .activityQrCode{
        margin: 20px 0;
    }
    .table>tbody>tr:first-child>td{
        border-top: none;
    }
    .activityDateTime{
        font-size: 12px;
    }
    .activityDateTime .text-info{
        overflow: hidden;
    }
</style>
<div class="container-fluid">
    <div class="row bg-title">
        <div class="col-lg-6 col-md-4 col-sm-4 col-xs-12">
            <h3 class="page-title">Batch Progress <a href="javascript:void(0);" onclick="javascript:window.print();" class="text-info" title="Print Page Report"><i class="fa fa-print"></i> Print</a></h3> 
            <div class="page-batch-infomation">
            <h4>Batch No:</h4>
            <p><?php echo $_GET['batchNo'];?></p>
            </div>
        </div>
        <!-- /.col-lg-12 -->
    </div>
        <!-- .row -->
        <div class="row">
            <div class="col-md-12">
                <div class="white-box">
                    <ul class="timeline">
                        <li>
                            <div class="timeline-badge danger">
                                <i class="fa fa-check"></i>
                            </div>
                            <div class="timeline-panel" id="cultivationSection">
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">การเพาะปลูก</h4>
                                    <div class="text-muted text-success activityDateTime"></div>
                                </div>
                                <div>
                                    <div class="activityQrCode text-center"></div>
                                </div>
                                <div class="timeline-body">
                                    <table class="table activityData table-responsive" >
                                        <tr>
                                            <td colspan="2"><p>Information Not Avilable</p></td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="verify-information text-right"></div>
                            </div>
                        </li>
                        <li class="timeline-inverted">
                            <div class="timeline-badge danger">
                                <i class="fa fa-times"></i>
                            </div>
                            <div class="timeline-panel" id="farmInspectionSection">
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">Farm-Inspector</h4>
                                    <div class="text-muted text-success activityDateTime"></div>
                                </div>
                                <div>
                                    <div class="activityQrCode text-center"></div>
                                </div>
                                <div class="timeline-body">
                                    <table class="table activityData table-responsive">
                                        <tr>
                                            <td colspan="2"><p>Information Not Avilable</p></td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="verify-information text-right"></div>
                            </div>
                        </li>
                        <li>
                           <div class="timeline-badge danger">
                                <i class="fa fa-times"></i>
                            </div>
                            <div class="timeline-panel" id="harvesterSection">
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">การเก็บเกี่ยว</h4>
                                    <div class="text-muted text-success activityDateTime"></div>
                                </div>
                                <div>
                                    <div class="activityQrCode text-center"></div>
                                </div>
                                <div class="timeline-body">
                                    <table class="table activityData table-responsive" >
                                        <tr>
                                            <td colspan="2"><p>Information Not Avilable</p></td>
                                        </tr>
                                    </table>        
                                </div>
                                <div class="verify-information text-right"></div>
                            </div>
                        </li>
                        <li class="timeline-inverted">
                            <div class="timeline-badge danger">
                                <i class="fa fa-times"></i>
                            </div>
                            <div class="timeline-panel" id="exporterSection"> 
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">การส่งออก</h4>
                                    <div class="text-muted text-success activityDateTime"></div>
                                </div>
                                <div>
                                    <div class="activityQrCode text-center"></div>
                                </div>
                                <div class="timeline-body">
                                    <table class="table activityData table-responsive">
                                        <tr>
                                            <td colspan="2"><p>Information Not Avilable</p></td>
                                        </tr>
                                    </table>  
                                </div>
                                <div class="verify-information text-right"></div>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-badge danger">
                                <i class="fa fa-times"></i>
                            </div>
                            <div class="timeline-panel" id="importerSection">
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">การนำเข้า</h4>
                                    <div class="text-muted text-success activityDateTime"></div>
                                </div>
                                <div>
                                    <div class="activityQrCode text-center"></div>
                                </div>
                                <div class="timeline-body">
                                   <table class="table activityData table-responsive" >
                                        <tr>
                                            <td colspan="2"><p>Information Not Avilable</p></td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="verify-information text-right"></div>
                            </div>
                        </li>
                        <li class="timeline-inverted">
                            <div class="timeline-badge danger">
                                <i class="fa fa-times"></i>
                            </div>
                            <div class="timeline-panel" id="processorSection">
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">Processor</h4>
                                    <div class="text-muted text-success activityDateTime"></div>
                                </div>
                                <div>
                                    <div class="activityQrCode text-center"></div>
                                </div>
                                <div class="timeline-body">
                                    <table class="table activityData table-responsive" >
                                        <tr>
                                            <td colspan="2"><p>Information Not Avilable</p></td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="verify-information text-right"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- /.row -->
        <!-- .right-sidebar -->
        <div class="right-sidebar">
            <div class="slimscrollright">
                <div class="rpanel-title"> Service Panel <span><i class="ti-close right-side-toggle"></i></span> </div>
                <div class="r-panel-body">
                    <ul>
                        <li><b>Layout Options</b></li>
                        <li>
                            <div class="checkbox checkbox-info">
                                <input id="checkbox1" type="checkbox" class="fxhdr">
                                <label for="checkbox1"> Fix Header </label>
                            </div>
                        </li>
                        <li>
                            <div class="checkbox checkbox-warning">
                                <input id="checkbox2" type="checkbox" checked="" class="fxsdr">
                                <label for="checkbox2"> Fix Sidebar </label>
                            </div>
                        </li>
                        <li>
                            <div class="checkbox checkbox-success">
                                <input id="checkbox4" type="checkbox" class="open-close">
                                <label for="checkbox4"> Toggle Sidebar </label>
                            </div>
                        </li>
                    </ul>
                    <ul id="themecolors" class="m-t-20">
                        <li><b>With Light sidebar</b></li>
                        <li><a href="javascript:void(0)" theme="default" class="default-theme">1</a></li>
                        <li><a href="javascript:void(0)" theme="green" class="green-theme">2</a></li>
                        <li><a href="javascript:void(0)" theme="gray" class="yellow-theme">3</a></li>
                        <li><a href="javascript:void(0)" theme="blue" class="blue-theme">4</a></li>
                        <li><a href="javascript:void(0)" theme="purple" class="purple-theme">5</a></li>
                        <li><a href="javascript:void(0)" theme="megna" class="megna-theme working">6</a></li>
                        <li><b>With Dark sidebar</b></li>
                        <br/>
                        <li><a href="javascript:void(0)" theme="default-dark" class="default-dark-theme">7</a></li>
                        <li><a href="javascript:void(0)" theme="green-dark" class="green-dark-theme">8</a></li>
                        <li><a href="javascript:void(0)" theme="gray-dark" class="yellow-dark-theme">9</a></li>
                        <li><a href="javascript:void(0)" theme="blue-dark" class="blue-dark-theme">10</a></li>
                        <li><a href="javascript:void(0)" theme="purple-dark" class="purple-dark-theme">11</a></li>
                        <li><a href="javascript:void(0)" theme="megna-dark" class="megna-dark-theme">12</a></li>
                    </ul>
                    <ul class="m-t-20 chatonline">
                        <li><b>Chat option</b></li>
                        <li>
                            <a href="javascript:void(0)"><img src="plugins/images/users/varun.jpg" alt="user-img" class="img-circle"> <span>Varun Dhavan <small class="text-success">online</small></span></a>
                        </li>
                        <li>
                            <a href="javascript:void(0)"><img src="plugins/images/users/genu.jpg" alt="user-img" class="img-circle"> <span>Genelia Deshmukh <small class="text-warning">Away</small></span></a>
                        </li>
                        <li>
                            <a href="javascript:void(0)"><img src="plugins/images/users/ritesh.jpg" alt="user-img" class="img-circle"> <span>Ritesh Deshmukh <small class="text-danger">Busy</small></span></a>
                        </li>
                        <li>
                            <a href="javascript:void(0)"><img src="plugins/images/users/arijit.jpg" alt="user-img" class="img-circle"> <span>Arijit Sinh <small class="text-muted">Offline</small></span></a>
                        </li>
                        <li>
                            <a href="javascript:void(0)"><img src="plugins/images/users/govinda.jpg" alt="user-img" class="img-circle"> <span>Govinda Star <small class="text-success">online</small></span></a>
                        </li>
                        <li>
                            <a href="javascript:void(0)"><img src="plugins/images/users/hritik.jpg" alt="user-img" class="img-circle"> <span>John Abraham<small class="text-success">online</small></span></a>
                        </li>
                        <li>
                            <a href="javascript:void(0)"><img src="plugins/images/users/john.jpg" alt="user-img" class="img-circle"> <span>Hritik Roshan<small class="text-success">online</small></span></a>
                        </li>
                        <li>
                            <a href="javascript:void(0)"><img src="plugins/images/users/pawandeep.jpg" alt="user-img" class="img-circle"> <span>Pwandeep rajan <small class="text-success">online</small></span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- /.right-sidebar -->
</div>
<input type="hidden" id="batchNo" value="<?php $batchNo = isset($_GET['batchNo'])?$_GET['batchNo']:''; echo $batchNo;?>">

<?php include('templates/_footer.php');?>            