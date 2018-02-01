var models = require('../models');
var TextPost = models.TextPost;

function index(req, res) {
  TextPost.find({}, (err, textPosts) => {
    if (err) {
      res.send(err);
    }
    else res.json(textPosts);
  });
}

function create(req, res) {
  let newTextPost = new TextPost(req.body);
  newTextPost.save((err, model) => {
    if (err) {
      res.send(err);
    }
    res.json(model)
  });

}

function show(req, res) {
  TextPost.find({_id: req.params.post_id}, (err, textPost) => {
    if (err) {
      res.send(err);
    }
    else res.json(textPost);
  })
}

function update(req, res) {

}

function destroy(req, res) {

}

module.exports.index = index;
module.exports.create = create;
module.exports.show = show;
module.exports.update = update;
module.exports.destroy = destroy;
