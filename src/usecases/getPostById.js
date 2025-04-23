// src/usecases/getAllPosts.js

module.exports = (postRepository) => {
    return async (id) => {
      return await postRepository.findById(id);
    };
  };
  