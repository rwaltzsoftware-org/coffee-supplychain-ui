/* Vikas Code Starts */



/* Vikas Code Ends */


/* Nitish Code Starts */

(function()
{
    $(window).on("mainContractReady",function(){

        
    });
});

function addCultivationBatch()
{

}

function getAllEvents(contractRef) {
    contractRef.getPastEvents('Transfer', {
        fromBlock: 0,
        filter: {
            to: coinbase
        }
    }).then(function (events) {
        console.log(events);

        $("#transactions tbody").html(buildTransactionData(events));
    });
}
/* Nitish Code Ends */


