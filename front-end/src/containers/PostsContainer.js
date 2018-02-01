import React, {Component} from 'react';
import ShortTextPost from '../components/textPost/ShortTextPost';
import TextPostModel from '../models/TextPost';

class PostsContainer extends Component {
  constructor () {
    super();
    this.state = {
      posts: ""
    }
  }
  render() {
    TextPostModel.all().then( (res) => {
      this.state.posts = res.data.map((post) => {
        return (
          <ShortTextPost
            _id={post._id}
            title={post.title}
            thumbnail_image_url={post.thumbnail_image_url}
          />
        )

      })

    })
    return (
      <div className="PostsContainer">
       <h1>Here is the posts container</h1>
       {this.state.posts}
      </div>
    )
  }
}

export default PostsContainer;
