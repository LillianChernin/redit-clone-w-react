import React, {Component} from 'react';
import PostContainer from './PostContainer';
import TextPostModel from '../models/TextPost';

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
