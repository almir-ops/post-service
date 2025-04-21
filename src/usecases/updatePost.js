// src/usecases/updatePost.js

module.exports = (postRepository) => {
    return async (postId, data, userId) => {
      const post = await postRepository.findById(postId);
  
      if (!post) {
        throw new Error('Post not found');
      }
  
      if (post.authorId !== userId) {
        throw new Error('Unauthorized');
      }
  
      return await postRepository.update(postId, data);
    };
  };
  