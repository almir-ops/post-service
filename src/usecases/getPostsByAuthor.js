// src/usecases/getPostsByAuthor.js

module.exports = (postRepository) => {
    return async (authorId) => {
      return await postRepository.findByAuthor(authorId);
    };
  };
  