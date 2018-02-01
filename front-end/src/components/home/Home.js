import React, {Component} from 'react';
import PostsContainer from '../../containers/PostsContainer';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <PostsContainer />
      </div>
    )
  }
}

export default Home;
