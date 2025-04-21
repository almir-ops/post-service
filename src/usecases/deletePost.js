// src/usecases/deletePost.js

module.exports = (postRepository) => {
    return async (postId, userId) => {
      const post = await postRepository.findById(postId);
  
      if (!post) {
        throw new Error('Post not found');
      }
  
      if (post.authorId !== userId) {
        throw new Error('Unauthorized');
      }
  
      await postRepository.delete(postId);
      return { message: 'Post deleted successfully' };
    };
  };
  