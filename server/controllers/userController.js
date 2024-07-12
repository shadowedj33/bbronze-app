import User from "../models/User.js";

export const createUser = async (req, res) => {
    const newUser = new User(req.body)
    try {
        const savedUser = await newUser.save();
        res.status(200).json({
            success: true,
            message: 'User created successfully',
            data: savedUser,
        });
    } catch (err) {
        res.status(500).json({
            success: true,
            message: 'User created successfully',
            data: savedUser,
        });
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params.id;

    try {
        await userData.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: 'User deleted successfully',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete user. Try again.',
        });
    }
}

export const updateUser = async (req, res) => {
    const { id } =req.params.id
  
    try{
      const updatedUser = await User.findByIdAndUpdate(id,
        {
          $set : req.body
        }, {new: true});
  
        res 
          .status(200)
          .json({
              success: true,
              message: 'Successfully updated User', 
              data: updatedUser,
          });
  
    }catch(err){
      res
       .status(500)
       .json({
          success: false,
          message: "Failed to update.",
        });
    }
}

export const getUser = async (req, res) => {
    const { id } = req.params.id;

    try {
        const user = await User.findById(id);
        res.status(200).json({
            success: true,
            message: 'User retrieved successfully',
            data: user,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve user. Try again.',
        });
    }
}

export const getAllUser = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({
            success: true,
            message: 'Users retrieved successfully',
            data: users,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve users. Try again.',
        });
    }
}