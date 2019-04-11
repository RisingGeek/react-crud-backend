const Router = require('express').Router();
const postCrud = require('../../db/helpers/postCrud');

/* Get all posts */
Router.get('/getposts', (req,res) => {
    postCrud.getPosts(res);
})

/* Add a post */
Router.post('/addpost', (req,res) => {
    postCrud.addPost(req.body, res);
})

/* Edit a post */
Router.put('/editpost/:id', (req,res) => {
    postCrud.editPost(req.params.id, req.body, res);
})

/* Show a particular post */
Router.get('/getparticularpost/:id', (req,res) => {
    postCrud.findPost(req.params.id,res);
})

module.exports = Router;