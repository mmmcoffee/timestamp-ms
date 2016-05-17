var express = require('express');
var router = express.Router();
var url = require('url');

/* GET home page. */
router.get('/*', function(req, res, next) {

	var unix = null;
	var natural = null;
	var input = url.parse(req.url).pathname.substring(1);
	var inputNum = input*1;
	var decodedInput = decodeURIComponent(input);
	var d;

	if (inputNum) {

		unix = inputNum;
		d = new Date(input*1000);
		natural = d.toDateString();

	} else if (decodedInput) {

		natural = decodedInput;
		d = new Date(natural);
		unix = (Number(d))/1000;
	}	
  
  res.json({
  	howThisWorks: "Pass a valid date or unix timestamp at the end of this page's url, get that date back in both formats",
  	however: "Pass neither, get back null",
  	unix: unix,
  	natural: natural
  });
});

module.exports = router;
