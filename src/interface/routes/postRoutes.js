const express = require('express');
const router = express.Router();

const SequelizePostRepository = require('../../infra/repositories/SequelizePostRepository');
const createPost = require('../../usecases/createPost');
const getAllPosts = require('../../usecases/getAllPosts');
const getPostById = require('../../usecases/getPostById');
const getPostsByAuthor = require('../../usecases/getPostsByAuthor');
const updatePost = require('../../usecases/updatePost');
const deletePost = require('../../usecases/deletePost');

const makePostController = require('../controllers/PostController'); // renomeei para ficar mais claro
const auth = require('../middlewares/authMiddleware');

const repository = new SequelizePostRepository();

const postUseCases = {
  createPost: createPost(repository),
  getAllPosts: getAllPosts(repository),
  getPostById: getPostById(repository),
  getPostsByAuthor: getPostsByAuthor(repository),
  updatePost: updatePost(repository),
  deletePost: deletePost(repository),
};

const controller = makePostController(postUseCases); // chamando a função e passando os usecases

// 🔐 aplica auth a todas as rotas
router.use(auth);

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getPostById);
router.get('/author/:authorId', controller.getByAuthor);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
