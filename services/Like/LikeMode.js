import { DataTypes, Model } from "sequelize";

import db from "../../db.js";
import User from "../User/model.js";
import Post from '../Post/model.js';

class Likes extends Model {}

Likes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db.sequelize,
    modelName: "likes",
    freezeTableName: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

Likes.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Likes.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "cascade",
});

export default Likes;
