const users = require('../models/usermodel');

// create 

const createUser = (req , res ) => {
    users.push(req.body);
    res.status(201).json({
        message : "User Created",
        data : users
    })
}

// get user 
const getUser = (req , res ) => {
    
    res.status(201).json({
        message : "User Retrieved",
        data : users
    })
}

// update user
const updateUser = (req , res ) => {
    const id = req.params.id
    users[id] = req.body;
    
    res.json({
        message : "User Updated",
        data : users
    })
}

// delete user
const deleteUser = (req , res ) => {
    const id = req.params.id; 
    users.splice(id,1);
    
    res.json({
        message : "User DELETED",
        users
    })
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser
}