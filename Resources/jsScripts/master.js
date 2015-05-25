//Wit.ai
// function isKeySentence(data, callback) {
// 	var w = require('node-wit');
// 	var ACCESS_TOKEN = "FDXLOQWL764U5RYPUWJLYGQPK3S2QZLT";

// 	w.captureTextIntent(ACCESS_TOKEN, data, function (err, res) {
// 		if (err) console.log("Error: ", err);
// 			out = outcomes[0].intent;
// 			callback(out)
// 		});
// }

function isKeySentence(data, callback) {
	var ACCESS_TOKEN = "FDXLOQWL764U5RYPUWJLYGQPK3S2QZLT";
$.ajax({
  url: 'https://api.wit.ai/message',
  data: {
    'q': data,
    'access_token' : ACCESS_TOKEN
  },
  dataType: 'jsonp',
  method: 'GET',
  success: function(response) {
      console.log("success!", response);
  }
});
}


//data = "The fifth president of the United States was James Monroe."
//var x = isKeySentence(data); 

//Calais
function parseKeyWords(data) {
	var token = "chgaeE1gAeyDZOdiN3Et7l44EJCwOWAp";
	var content = "";
	var thirdReg;
	$.ajax({
		type:"post",
		url:"https://api.thomsonreuters.com/permid/calais",
		dataType: "text",
		data: data,
		beforeSend: function(xhr) {
			xhr.setRequestHeader('Content-Type', "text/raw");
			xhr.setRequestHeader('x-ag-access-token', token);
		},
		success: function(ret, textStatus, XMLHttpRequest) {
			if(ret.success == true)
				content = ret;
				parser = new DOMParser();
				xmlDoc = parser.parseFromString(ret, "text/xml");
				stringDoc = new XMLSerializer().serializeToString(xmlDoc);
				
				var firstReg = stringDoc.match(/<!--Relations:[\s\S]*?-->/)[0];
				var secondReg = firstReg.match(/\:(.*)\n/gm);
				thirdReg = new Array();
				for(x=0; x<secondReg.length; x+=1) {
					var sp = secondReg[x].split(", ");
					for(y=0; y<sp.length; y+=1) {
						var temp = sp[y].match(/([A-z])\w+/g);
						if(temp != null) {
							thirdReg.push(temp.join([separator = ' ']));
						}
					}
				}
		},
		error: function(e) {
			console.log(e);
		}
	});

	console.log(thirdReg.join([separator = ", "]))
	return thirdReg;      

};

//data = "On Armed Services Day — and a day the Obama administration reported killing a senior Islamic State leader in Syria — most of the nearly dozen GOP presidential prospects at a state party dinner called for a more confrontational stance toward Iran."
//var x = parseKeyWords(data); 

//Wikipedia
function getWikipedia(data, callback) {
	myurl = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=" + data.split(" ").join([separator = "%20"]);

	$.ajax({
	    url : myurl,
	    success : function(contents) {
	        var contents = JSON.stringify(contents.query.pages);
			var firstReg = contents.match(/extract[\s\S]*?\}/g)[0];
			firstReg = firstReg.replace("extract\":\"", "");
			firstReg = firstReg.replace("\"}", "");
			firstReg = firstReg.replace(/\\n/g, " ");
			firstReg = firstReg.replace(/\\"/g, "");
			contents = firstReg.split(". ");
			newContents = [];
			for(x=0; x<3; x+=1) {
				newContents.push(contents[x]);
			}
			finalContents = newContents.join([separator = ". "]) + ".";
			callback(finalContents)
	    },
		error: function(e) {
			console.log(e);
		}
	});
};

//data = "Barack Obama"
//getWikipedia(data, function(resp) {
//	var x = resp;
//});

//NY Times
function getNYTimes(data) {
	var key = "250b8a4025a22bfe07e0da331a5cf16c:10:72099654"
	data = data.split(" ").join([separator = "+"]);
	myurl = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + data + "&api-key=" + key;

	$.ajax({
		type:"get",
		url: myurl,
		async: false,
		success: function(ret) {
			content = ret.response.docs;

			articles = []
			for(x=0; x<3; x+=1) {
				articles.push(content[x].abstract)
				articles.push(content[x].web_url)
			}
		},
		error: function(e) {
			console.log(e);
		}
	});

	console.log(articles)
	return articles;      
};

//data = "Stack Overflow"
//var x = getNYTimes(data); 

function masterFunction(sentence) {
	data = sentence;
	isKeySentence(data, function(resp) {
		category = resp;
		if(category != "trash") {
			key_words = parseKeyWords(data);
			for(var word in key_words) {
				getWikipedia(word, function(resp) {
					description = "";
					def = resp;
					description += def;
					articles = getNYTimes(word)
					for(x=0; x<6; x+=2) {
						description += "\n\n";
						description += articles[x];
						description += "\n";
						description += articles[x+1];
					}
					console.log(category);
					console.log(word);
					console.log(description);
					//var makeCard = chooseCard(category, word, description);
				});
			}
		}
	});
}