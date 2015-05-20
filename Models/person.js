var mongoose = require("mongoose"),
Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var personCardSchema = new Schema({
	created_by: {type: Schema.Types.ObjectId, ref: 'User'},
	name: String,
	date: Date,
	context: String,
	timestamp: {type: Date, default: Date.now},
	alphaInfo: {type: [Schema.Types.Mixed], required: false},
	imageURL: String,
	relevantLinks: {type: [Schema.Types.Mixed], required: false}
});
module.exports = mongoose.model("PersonCard", personCardSchema);