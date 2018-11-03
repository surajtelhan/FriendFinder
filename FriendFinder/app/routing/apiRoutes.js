var router = require("express").Router();
var friends = require("../data/friends");


// Create a function to check results
//---------------------------------------------------------
function compareVals(in1, in2) {
    var compareResults;
    var delta = parseInt(in1) - parseInt(in2);
    if (delta < 0) {
        var compareResults = parseInt(delta) * -1;
    } else {
        compareResults = delta;
    }
    return compareResults;
}


// Return the json formatted data 
//---------------------------------------------------------
router.get("/friends", function (req, res) {
    return res.json(friends);
});


// Process the data from the user submission
//---------------------------------------------------------
router.post("/friends", function (req, res) {
    var newEntry = req.body;


    var bestMatch = [];
    for (index in friends) {
        var cmpQ1 = compareVals(friends[index].scores[0], newEntry.scores[0]);
        var cmpQ2 = compareVals(friends[index].scores[1], newEntry.scores[1]);
        var cmpQ3 = compareVals(friends[index].scores[2], newEntry.scores[2]);
        var cmpQ4 = compareVals(friends[index].scores[3], newEntry.scores[3]);
        var cmpQ5 = compareVals(friends[index].scores[4], newEntry.scores[4]);
        var cmpQ6 = compareVals(friends[index].scores[5], newEntry.scores[5]);
        var cmpQ7 = compareVals(friends[index].scores[6], newEntry.scores[6]);
        var cmpQ8 = compareVals(friends[index].scores[7], newEntry.scores[7]);
        var cmpQ9 = compareVals(friends[index].scores[8], newEntry.scores[8]);
        var cmpQ10 = compareVals(friends[index].scores[9], newEntry.scores[9]);
        var finalScore = parseInt(cmpQ1) + parseInt(cmpQ2) + parseInt(cmpQ3) + parseInt(cmpQ4) + parseInt(cmpQ5) + parseInt(cmpQ6) + parseInt(cmpQ7) + parseInt(cmpQ8) + parseInt(cmpQ9) + parseInt(cmpQ10);


// If you get a perfect match, push it into the array
//---------------------------------------------------------
        if (finalScore === 0) {
            var match = {
                "name": friends[index].name,
                "photo": friends[index].photo,
                "final": finalScore
            }
            bestMatch.pop();
            bestMatch.push(match);
        }


// If there's no entry, this becomes the best match
//---------------------------------------------------------
        else if (bestMatch.length < 1) {
            var match = {
                "name": friends[index].name,
                "photo": friends[index].photo,
                "final": finalScore
            }
            bestMatch.pop();
            bestMatch.push(match);
        }


// Check to see if the current entry is a better match
//---------------------------------------------------------
        else if (parseInt(finalScore) < parseInt(bestMatch[0].final)) {
            var match = {
                "name": friends[index].name,
                "photo": friends[index].photo,
                "final": finalScore
            }
            bestMatch.pop();
            bestMatch.push(match);
        }
    }


// Return the contents of the best match when done
//---------------------------------------------------------
    if (bestMatch.length > 0) {
        res.json(bestMatch[0]);
    }
});


// Make router available to server
//---------------------------------------------------------
module.exports = router;