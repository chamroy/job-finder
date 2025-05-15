import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import Job from "../models/JobModel.js";
import cloudinary from "cloudinary";
import { promises as fs } from "fs";
export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });

  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const jobs = await Job.countDocuments();
  res.status(StatusCodes.OK).json({ users, jobs });
};

export const updateUser = async (req, res) => {
    console.log(req.file);
    const obj = { ...req.body };
    delete obj.password;
    console.log(obj);
  
    let updatedUser = await User.findById(req.user.userId);
  
    if (req.file) {
      const response = await cloudinary.v2.uploader.upload(req.file.path);
      console.log(response);
      await fs.unlink(req.file.path);
      updatedUser.avatar = response.secure_url;
      updatedUser.avatarPublicId = response.public_id;
    }
    
    updatedUser = await User.findByIdAndUpdate(req.user.userId, obj, { new: true });
    
    if (req.file && updatedUser.avatarPublicId) {
      await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
    }
    
    res.status(StatusCodes.OK).json({ message: "update user" });
  };