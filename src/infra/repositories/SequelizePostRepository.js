// src/infra/repositories/SequelizePostRepository.js
const PostModel = require('../models/PostModel');

class SequelizePostRepository {
  async create(post) {
    return await PostModel.create(post);
  }

  async findById(id) {
    return await PostModel.findByPk(id);
  }

  async findAll() {
    return await PostModel.findAll();
  }

  async update(id, data) {
    return await PostModel.update(data, { where: { id } });
  }

  async delete(id) {
    return await PostModel.destroy({ where: { id } });
  }

  async findByAuthor(authorId) {
    return await PostModel.findAll({
      where: { authorId }
    });
  }
  
}

module.exports = SequelizePostRepository;
