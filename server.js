require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./app/routes/router');
const cors = require('cors');
const connectToDatabase = require('./app/middlewares/db');

connectToDatabase();
app.use(cors());
app.use(express.json());

app.use('/api/v1', router);

app.get('/healthCheck', (req, res) => {
    res.status(200).json({
        success:true
    });
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is up at PORT', PORT);
});