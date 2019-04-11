const mongoose = require('mongoose');
const connection = require('../connection');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    username: {
        type: String
    },
    title: {
        type: String
    },
    body: {
        type: String
    }
})

const Post = mongoose.model('post', postSchema);

module.exports = Post;