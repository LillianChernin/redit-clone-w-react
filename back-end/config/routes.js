const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const textPostsController = require('../controllers/textPosts');
const commentsController = require('../controllers/comments');

router.get('/', (req, res) => {
  res.json('welcome to the redit clone backend!')
})

//TextPost Routes

router.get('/api/posts', textPostsController.index);

router.get('/api/posts/:post_id', textPostsController.show);

router.post('/api/posts', textPostsController.create);

router.put('/api/posts/:post_id', textPostsController.update);

router.delete('/api/posts/:post_id', textPostsController.destroy);

//Comment Routes


module.exports = router;
