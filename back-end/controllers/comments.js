var models = require('../models');
var Comment = models.Comment;

const index = (req, res) => {

}

const show = (req, res) => {
  
}

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

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;
