import React, {Component} from 'react';
import PostContainer from './PostContainer';

class PostsContainer extends Component {
  render() {
    return (
      <div className="PostsContainer">
       <PostContainer />
       <PostContainer />
       <PostContainer />
      </div>
    )
  }
}

export default PostsContainer;
