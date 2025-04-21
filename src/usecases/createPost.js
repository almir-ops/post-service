// src/usecases/createPost.js
module.exports = (postRepository) => async (postData) => {
    console.log('Dados recebidos para criar o post:', postData); // Verifique se authorId está presente
    return await postRepository.create(postData);
  };
  