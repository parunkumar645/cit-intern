const express = require('express');
const logger = require('./middleware/logger');

const userRoutes = require('./routes/userRoutes');




const app = express();

app.use(express.json());
app.use(logger);


app.use('/users', userRoutes);

app.listen(3000, () => {
    console.log("Server Started")
});