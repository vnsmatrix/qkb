const FBExplorer = require("facebook-explorer");

FBExplorer.init({ appId: "182547595901509" });

var searchOptions = {
    center: {
    	latitude: 52.520008,
        longitude: 13.404954
    },
    distance: 100,
    keywords: "LGBT",
    profile: "brief",
    sort: "time",
    order: "asc",
    method: "multiple"
};

function partialResultsCallback(result, hasMore) {
    console.log(result);
};

module.exports = getEvents = FBExplorer.findEvents(searchOptions, partialResultsCallback)
.then(function(result) {
    console.log("findEvents result", result);
}).catch(e => {
    console.log("findEvents error", e);
});
