const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;
const DB_URL = "mongodb+srv://rashidalizellesolutions:Sniper+122@mycluster.v4cfzgl.mongodb.net/user-profile";
const app = express()

mongoose.connect(DB_URL).then(() => console.log("Database Connected")).catch(err => console.log(err));
app.use(express.json());


const createUserRoutes = require('./routes/user-profile-routes')
app.use('/api/v1', createUserRoutes);


app.listen(PORT, () => {console.log("surver is listening at port 4000")});