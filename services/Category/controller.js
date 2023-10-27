import Category from "./model.js";

const fetchCategories = async (req, res) => {
  await Category.findAll()
    .then((data) => {
      return data.length == 0
        ? res.status(500).json({
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
        message: error,
      });
    });
};

const fetchCategory = async (req, res) => {
  try {
    let id = req.query.id;
    await Category.findByPk(id)
      .then((value) => {})
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

const postCategory = async (req, res) => {
  try {
    let { title, description, author } = req.body;
    let data = {
      title: title,
      description: description,
      author: author,
    };
    await Category.create(data)
      .then((value) => {
        return res.status(201).json({
          message: "Added Successfully",
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

const updateCategory = async (req, res) => {
  try {
    let id = req.query.update;
    let { title, description, author } = req.body;
    let data = {
      title: title,
      description: description,
      author: author,
    };
    await Category.update(data, {
      where: {
        id: id,
      },
    })
      .then(() => {
        return res.status(201).json({
          message: "Updated Successfully",
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

const deleteCategory = async (req, res) => {
  try {
    let id = req.query.delete;
    await Category.destroy({
      where: {
        id: id,
      },
    })
      .then(() => {
        return res.status(500).json({
          message: "Deleted Successfully",
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
  fetchCategories,
  fetchCategory,
  postCategory,
  updateCategory,
  deleteCategory,
};
