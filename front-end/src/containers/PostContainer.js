import React, {Component} from 'react';
import TextPost from '../components/textPost/TextPost';
import TextPostModel from '../models/TextPost';

class PostContainer extends Component {

  render() {
    TextPostModel.all().then( (res) => {
      console.log(res);
    })
    return (
      <div className="PostContainer">
        <TextPost />
      </div>
    )
  }
}

export default PostContainer
