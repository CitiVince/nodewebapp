var mongoose = require('mongoose');

var blobSchema = new mongoose.Schema({
	name: String,
	badge: Number,
	dob: {type: Date, default: Date.now},
	company: String,
	isloved: Boolean
});
mongoose.model('Blob', blobSchema);