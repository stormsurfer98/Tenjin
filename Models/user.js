var mongoose = require("mongoose"),
Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var userSchema = new Schema({
	username: String,
	id: Schema.Types.ObjectId,
	password: String
}, {
	collection: "userbase"
});

module.exports = mongoose.model("User", userSchema);