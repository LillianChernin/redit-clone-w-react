var models = require('../models');
var Comment = models.Comment;



function create(req, res) {
  let newComment = new Comment(req.body);
  newComment.save((err, model) => {
    if (err) {
      res.send(err);
    }
    res.json(model);
  })

}

function update(req, res) {
  

}

function destroy(req, res) {

}

module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;
