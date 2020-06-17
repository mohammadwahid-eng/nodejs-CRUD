const Post = require('../models/post.model');

exports.index = function(req, res) {
    Post.find({}, function(err, posts) {
        res.render('posts/index', { posts: posts });
    });
}

exports.create = function(req, res) {
    res.render('posts/create');
}

exports.store = function(req, res) {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    })
    
    post.save().then(post => {
        res.redirect('/posts')
    }).catch(err => console.log(err))
}

exports.show = function(req, res) {
    Post.findById(req.params.id, function(err, post) {
        res.render('posts/show', { post: post });
    });
}

exports.edit = function(req, res) {
    Post.findById(req.params.id, function(err, post) {
        res.render('posts/edit', { post: post });
    });
}

exports.update = function(req, res) {
    let updatePost = {
        title: req.body.title,
        content: req.body.content
    }
    Post.findByIdAndUpdate(req.params.id, updatePost, function(err, post) {
        res.redirect('/posts');
    });
}

exports.destroy = function(req, res) {
    Post.findByIdAndDelete(req.params.id, function(err, post) {
        res.redirect('/posts');
    });
}



