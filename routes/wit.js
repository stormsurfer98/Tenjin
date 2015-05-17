function isKeySentence(data) {
	var w = require('node-wit');
	var ACCESS_TOKEN = "FDXLOQWL764U5RYPUWJLYGQPK3S2QZLT";

	w.captureTextIntent(ACCESS_TOKEN, data, function (err, res) {
		if (err) console.log("Error: ", err);
			out = res;
			console.log("bye");
		});

	console.log("hi");
	return(out.outcomes[0].intent);
}

data = "The fifth president of the United States was James Monroe."
var x = isKeySentence(data);
console.log(x);