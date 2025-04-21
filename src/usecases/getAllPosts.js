// src/usecases/getAllPosts.js

module.exports = (postRepository) => {
    return async () => {
      return await postRepository.findAll();
    };
  };
  