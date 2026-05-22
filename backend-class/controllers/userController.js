const User = require('../models/userModel')


// CREATE USER
const createUser = async (req, res) => {

    try {

        const user = await User.create(req.body)

        res.status(201).json({
            message: 'User Added Successfully',
            user
        })

    } catch (error) {

        res.status(500).json({
            message: error.message
        })
    }
}


// GET USERS
const getUsers = async (req, res) => {

    try {

        const users = await User.find()

        res.status(200).json(users)

    } catch (error) {

        res.status(500).json({
            message: error.message
        })
    }
}


// UPDATE USER
const updateUser = async (req, res) => {

    try {

        const id = req.params.id

        const updatedUser = await User.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )

        res.status(200).json({
            message: 'User Updated Successfully',
            updatedUser
        })

    } catch (error) {

        res.status(500).json({
            message: error.message
        })
    }
}


// DELETE USER
const deleteUser = async (req, res) => {

    try {

        const id = req.params.id

        await User.findByIdAndDelete(id)

        res.status(200).json({
            message: 'User Deleted Successfully'
        })

    } catch (error) {

        res.status(500).json({
            message: error.message
        })
    }
}


module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser
}