// src/main/server.js
require('dotenv').config();
const express = require('express');
const postRoutes = require('../interface/routes/postRoutes');
const sequelize = require('../infra/database/sequelize');
const PostModel = require('../infra/models/PostModel');

const app = express();
app.use(express.json());
app.use('/posts', postRoutes);

sequelize.sync().then(() => {
  console.log('Post DB ready!');
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Post service running on port ${PORT}`);
});
