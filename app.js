const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', require('./routes/post/postRouter'));

app.listen(PORT, () => console.log(`server started on port ${PORT}`));