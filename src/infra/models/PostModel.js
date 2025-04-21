    // src/infra/models/PostModel.js
    const { DataTypes } = require('sequelize');
    const sequelize = require('../database/sequelize');

    const PostModel = sequelize.define('Post', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    authorId: {
        type: DataTypes.UUID,
        allowNull: false
    }
    }, {
    tableName: 'posts',
    schema: 'blog',
    timestamps: true
    });

    module.exports = PostModel;
