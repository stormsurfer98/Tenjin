function isKeySentence(data) {
	var w = require('node-wit');
	var ACCESS_TOKEN = "FDXLOQWL764U5RYPUWJLYGQPK3S2QZLT";

	w.captureTextIntent(ACCESS_TOKEN, data, function (err, res) {
		console.log("Response from Wit for text input: ");
		if (err) console.log("Error: ", err);
			console.log(JSON.stringify(res, null, " "));
		});
}

data = "The fifth president of the United States was James Monroe."
var x = isKeySentence(data);