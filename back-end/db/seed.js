const db = require ('../models');

let currentDate = new Date()

const testComments = [
  {
    userName: 'testUserName1',
    text: 'test comment text 1',
    timePosted: currentDate
  },{
    userName: 'testUserName2',
    text: 'test comment text 2',
    timePosted: currentDate
  },{
    userName: 'testUserName3',
    text: 'test comment text 3',
    timePosted: currentDate
  }
];

const testTextPostsList = [
  {
    title: 'test textpost title 1',
    content: 'test textpost content 1',
    thumbnail_image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Creative-Tail-Animal-cat.svg'
  }, {
    title: 'test textpost title 2',
    content: 'test textpost content 2',
    thumbnail_image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Creative-Tail-Animal-cat.svg'
  }, {
    title: 'test textpost title 3',
    content: 'test textpost content 3',
    thumbnail_image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Creative-Tail-Animal-cat.svg'
  }, {
    title: 'test textpost title 4',
    content: 'test textpost content 4',
    thumbnail_image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Creative-Tail-Animal-cat.svg'
  }, {
    title: 'test textpost title 5',
    content: 'test textpost content 5',
    thumbnail_image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Creative-Tail-Animal-cat.svg'
  }, {
    title: 'test textpost title 6',
    content: 'test textpost content 6',
    thumbnail_image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Creative-Tail-Animal-cat.svg'
  }
]

db.TextPost.remove({}, (err, textposts) => {
  db.TextPost.create(testTextPostsList, (err, textposts) => {
    if (err) {
      return console.log('ERROR ' + err);
    }
    console.log("all textposts: " + textposts);
    console.log("created " + textposts.length + " textposts");
    process.exit();
  })
})
