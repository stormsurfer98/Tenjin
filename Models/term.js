var mongoose = require("mongoose"),
Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var termCardSchema = new Schema({
	created_by: {type: Schema.Types.ObjectId, ref: 'User'},
	name: String,
	definition: String,
	timestamp: {type: Date, default: Date.now},
	alphaInfo: {type: [Schema.Types.Mixed], required: false},
	relevantLinks: {type: [Schema.Types.Mixed], required: false}
});

module.exports = mongoose.model("TermCard", termCardSchema);