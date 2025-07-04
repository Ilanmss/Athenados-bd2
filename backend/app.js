const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const PORT = 3000;

// enable cors
app.use(cors());
// enable json parser
app.use(express.json());

// route the  api
const apiRoutes = require('./routes/api');
// use the route
app.use('/api/api', apiRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to api API !")
})

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is successfully listening at port:", PORT);
    else
        console.error('An error occurred:', error);
});

main().catch((error) => console.error(error));

async function main() {
    const connectionString = "mongodb://localhost:27017/athenadosdb";
    await mongoose.connect(connectionString);
    mongoose.set('strictQuery', true);
}