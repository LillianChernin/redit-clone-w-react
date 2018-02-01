import axios from 'axios';

class CommentModel {
  static create(textPost, comment) {
    let request = axios.post(`http://localhost:8080/api/posts/${textPost._id}/comments`, comment);
    return request;
  }
  static all(textPost) {
    let request = axios.get(`http://localhost:8080/api/posts${textPost._id}/comments`);
    return request;
  }
  static delete(textPost, comment) {
    let request = axios.delete(`http://localhost:8080/api/posts/${textPost._id}/comments/${comment._id}`);
    return request;
  }
  static update(textPost, comment, commentBody) {
    let request = axios.put(`http://localhost:8080/api/posts/${textPost._id}/comments/${comment._id}`, {
      body: commentBody
    });
    return request;
  }
}

export default TodoModel
