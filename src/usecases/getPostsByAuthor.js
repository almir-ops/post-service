// src/usecases/getPostsByAuthor.js

module.exports = (postRepository) => {
    return async (id) => {
      return await postRepository.findById(id);
    };
  };
  