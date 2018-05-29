/* Vikas Code Starts */



/* Vikas Code Ends */


/* Nitish Code Starts */


$(window).on("coinbaseReady", function () {
    getAllEvents(globMainContract);
});


function addCultivationBatch()
{

}

function getAllEvents(contractRef) {
    contractRef.getPastEvents('PerformCultivation', {
        fromBlock: 0
    }).then(function (events) {
        console.log(events);

        // $("#transactions tbody").html(buildTransactionData(events));
    }).catch(error => {
        console.log(error)
    });
}
/* Nitish Code Ends */


