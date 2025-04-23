
// src/interface/controllers/PostController.js

module.exports = (useCases) => ({
    create: async (req, res) => {
      const { title, content } = req.body;
      const authorId = req.user.id;
  
      try {
        const post = await useCases.createPost({ title, content, authorId });
        res.status(201).json(post);
      } catch (err) {
        console.error('Erro ao criar post:', err.message);
        res.status(400).json({ error: err.message });
      }
    },
  
    getAll: async (_req, res) => {
      const posts = await useCases.getAllPosts();
      res.json(posts);
    },
  
    getPostById: async (req, res) => {
      const { id } = req.params;
      const posts = await useCases.getPostById(id);
      res.json(posts);
    },

    getByAuthor: async (req, res) => {
      const { authorId } = req.params;
      const posts = await useCases.getPostsByAuthor(authorId);
      res.json(posts);
    },
  
    update: async (req, res) => {
      const { id } = req.params;
      const { title, content } = req.body;
      const userId = req.user.id;
  
      try {
        const updated = await useCases.updatePost({ id, title, content, userId });
        res.json(updated);
      } catch (err) {
        console.error('Erro ao atualizar post:', err.message);
        res.status(400).json({ error: err.message });
      }
    },
  
    remove: async (req, res) => {
      const { id } = req.params;
      const userId = req.user.id;
  
      try {
        await useCases.deletePost(id, userId);
        res.status(204).send();
      } catch (err) {
        console.error('Erro ao deletar post:', err.message);
        res.status(400).json({ error: err.message });
      }
    }
  });
  