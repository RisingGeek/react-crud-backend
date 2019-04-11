const Post = require('../models/post-model');

const postCrud = {
    getPosts: res => {
        Post.find().then(docs => {
            res.send(docs);
        }).catch(err => {
            console.log(err);
        })
    },
    addPost: (body, res) => {
        new Post(body).save().then(response => {
            res.send('post saved');
        }).catch(err => {
            console.log(err);
        })
    },
    editPost: (id,body, res) => {
        Post.updateOne({ _id: id }, {
            $set: {
                title: body.title,
                body: body.body
            }
        }).then(response => {
            res.send('post updated');
        }).catch(err => {
            console.log(err);
        })
    },
    findPost: (id, res) => {
        Post.findOne({ _id: id }).then(doc => {
            res.send(doc);
        }).catch(err => {
            console.log(err);
        })
    }
};

module.exports = postCrud;