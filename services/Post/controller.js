import Post from "./model.js";
import slug from "slug";

const fetchPosts = async (req, res) => {
  await Post.findAll()
    .then((data) => {
      return data.length == 0
        ? res.status(200).json({
            status: 200,
            message: "Nothing to Display",
          })
        : res.status(200).json({
            status: 200,
            count: data.length,
            data: data,
          });
    })
    .catch((error) => {
      return res.status(500).json({
        status: 500,
        message: error,
      });
    });
};

const fetchPost = async (req, res) => {
  try {
    let id = req.params.id;
    await Post.findByPk(id)
      .then((data) => {
        return res.status(200).json({
          data: data,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          message: error,
        });
      });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

const createPost = async (req, res) => {
  try {
    let { title, category_id, author_id, expert, content } = req.body;
    let data = {
      title: title,
      slug: slug(title),
      category_id: category_id,
      author_id: author_id,
      expert: expert,
      content: content,
    };
    await Post.create(data)
      .then(() => {
        return res.status(201).json({
          message: "New Post Created",
        });
      })
      .catch((error) => {
        return res.status(500).json({
          message: error,
        });
      });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

const updatePost = async (req, res) => {
  try {
    let id = req.query.update;
    let { title, category_id, author_id, expert, content } = req.body;
    let data = {
      title: title,
      slug: slug(title),
      category_id: category_id,
      author_id: author_id,
      expert: expert,
      content: content,
    };
    await Post.update(data, {
      where: {
        id: id,
      },
    })
      .then(() => {
        return res.status(201).json({
          message: "Post Updated Successfully",
        });
      })
      .catch((error) => {
        return res.status(500).json({
          message: error,
        });
      });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

const deletePost = async (req, res) => {
  try {
    let id = req.query.delete;
    await Post.destroy({
      where: {
        id: id,
      },
    })
      .then(() => {
        return res.status(500).json({
          message: "Deleted Successffully",
        });
      })
      .catch((error) => {
        return res.status(500).json({
          message: error,
        });
      });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export default {
  fetchPosts,
  fetchPost,
  deletePost,
  createPost,
  updatePost,
};
