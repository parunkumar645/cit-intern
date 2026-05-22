const mongoose = require('mongoose');

const connectDB = async() =>{
    try{
        await mongoose.connect('mongodb://localhost:27017/cit-intern-db',)
        console.log("Data Base Connceted")

    }catch(error){
        console.log(error.message)
        
    }
}
module.exports = connectDB;