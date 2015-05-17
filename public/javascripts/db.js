var mongoose = require("mongoose"),
Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String,
	id: Schema.Types.ObjectId,
	email: String,
	password: String
});

var eventCardSchema = new Schema({
	created_by: {type: Schema.Types.ObjectId, ref: 'User'},
	name: String,
	date: Date,
	context: String,
	timestamp: {type: Date, default: Date.now},
	alphaDefinition: {type: [Schema.Types.Mixed], required: false},
	relevantLinks: {type: [Schema.Types.Mixed], default: required: false}
});

var personCardSchema = new Schema({
	created_by: {type: Schema.Types.ObjectId, ref: 'User'},
	name: String,
	date: Date,
	context: String,
	timestamp: {type: Date, default: Date.now},
	alphaInfo: {type: [Schema.Types.Mixed], required: false},
	imageURL: String,
	relevantLinks: {type: [Schema.Types.Mixed], default: required: false}
});

var termCardSchema = new Schema({
	created_by: {type: Schema.Types.ObjectId, ref: 'User'},
	name: String,
	definition: String,
	timestamp: {type: Date, default: Date.now},
	alphaInfo: {type: [Schema.Types.Mixed], default: required: false},
	relevantLinks: {type: [Schema.Types.Mixed], default: required: false}
});

var db = mongoose.connect("mongodb://localhost/Tenjin");
var Users = db.model("User", userSchema);
var EventCards = db.model("EventCard", eventCardSchema);
var PersonCards = db.model("PersonCard", personCardSchema);
var TermCards = db.model("TermCard", termCardSchema);

var firstUser = Users
