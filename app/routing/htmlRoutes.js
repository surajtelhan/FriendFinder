var router = require("express").Router();
var path = require("path");


// Handle the default route and deliver home page
//---------------------------------------------------------
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });


// Handle the survey route and deliver the survey page
//---------------------------------------------------------  
  router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  

// Make routing available to the server
//---------------------------------------------------------  
module.exports = router;