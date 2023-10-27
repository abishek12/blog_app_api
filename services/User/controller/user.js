import User from "../model/UserModel.js";

const fetchUsers = async (req, res) => {
  await User.findAll()
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
    .catch((error) =>
      res.status(500).json({
        status: 500,
        message: error,
      })
    );
};

const fetchUser = async (req, res) => {
  let id = req.params.userId;
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
};

const deleteUser = async (req, res) => {
  try {
    let id = req.query.deleteProfile;
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
  let id = req.query.updateProfile;
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
