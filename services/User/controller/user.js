import User from "../model/UserModel.js";

const fetchUsers = async (req, res) => {
  try {
    await User.findAll()
      .then((data) => {
        if (data.length === 0) {
          return res.status(200).json({
            message: "Nothing to Display",
          });
        }
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

const fetchUser = async (req, res) => {
  try {
    let id = req.params.id;
    await User.findByPk(id)
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

const deleteUser = async (req, res) => {
  try {
    let id = req.query.id;
    await User.destroy({
      where: {
        id: id,
      },
    })
      .then((value) => {
        return res.status(200).json({
          message: "User Deleted",
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

const updateUser = async (req, res) => {
  let id = req.query.id;
  try {
    let { firstName, middleName, lastName } = req.body;
    let data = {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
    };
    await User.update(data, {
      where: {
        id: id,
      },
    })
      .then((value) => {
        return res.status(200).json({
          message: "User Updated",
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

export default { fetchUsers, fetchUser, updateUser, deleteUser };
