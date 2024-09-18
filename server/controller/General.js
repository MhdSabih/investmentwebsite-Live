import { UserModel } from "../model/User.model.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({});
    if (!users) {
      return res.status(404).send({ message: "No users found." });
    }

    const onlyUsers = users.filter((user) => user.role !== "ADMIN");

    res.status(200).send({ message: onlyUsers });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getAllAdmins = async (req, res) => {
  try {
    const admins = await UserModel.find({ role: "ADMIN" });
    if (!admins) {
      return res.status(404).send({ message: "No admins found." });
    }
    res.status(200).send({ message: admins });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const updateUserStatus = async (req, res) => {
  try {
    const { userId, status } = req.body;
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }
    user.userStatus = status;
    await user.save();

    res.status(200).send({ message: "User status updated successfully." });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getAllUsersStatus = async (req, res) => {
  try {
    const users = await UserModel.find({});
    if (!users) {
      return res.status(404).send({ message: "No users found." });
    }
    const usersStatus = users.map((user) => ({
      id: user._id,
      email: user.email,
      userStatus: user.userStatus,
    }));

    res.status(200).send({ message: usersStatus });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
