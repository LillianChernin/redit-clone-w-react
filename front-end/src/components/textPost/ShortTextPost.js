import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './shortTextPost.css'

class ShortTextPost extends Component {
  render() {
    return (
      <div className="shortTextPost">
        <img src={this.props.thumbnail_image_url} alt="post icon"/>
        <h3><Link to={`/posts/${this.props._id}`}>{this.props.title}</Link></h3>
      </div>
    )
  }
}

export default ShortTextPost;
