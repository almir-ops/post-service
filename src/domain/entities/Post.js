// src/domain/entities/Post.js
class Post {
    constructor({ id, title, content, authorId }) {
      this.id = id;
      this.title = title;
      this.content = content;
      this.authorId = authorId;
    }
  }
  
  module.exports = Post;
  