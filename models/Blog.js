//Imports
const 
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const model = mongoose.model('blog',BlogSchema);

module.exports = Blog = model