import Category from "./model.js";

const fetchContacts = async (req, res) => {
  try {
    await Category.findAll()
      .then((data) => {
        if (data.length === 0) {
          return res.status(500).json({
            message: "Nothing to Display",
          });
        } else {
          return res.status(200).json({
            data: data,
          });
        }
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

const fetchContact = async (req, res) => {
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

const postContact = async (req, res) => {
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

const updateContact = async (req, res) => {
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

const deleteContact = async (req, res) => {
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
  fetchContacts,
  fetchContact,
  postContact,
  updateContact,
  deleteContact,
};
