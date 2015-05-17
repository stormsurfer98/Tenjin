var mongoose = require("mongoose"),
Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var eventCardSchema = new Schema({
	created_by: {type: Schema.Types.ObjectId, ref: 'User'},
	name: String,
	date: Date,
	context: String,
	timestamp: {type: Date, default: Date.now},
	alphaDefinition: {type: [Schema.Types.Mixed], required: false},
	relevantLinks: {type: [Schema.Types.Mixed], required: false}
});

module.exports = mongoose.model("EventCard", eventCardSchema);