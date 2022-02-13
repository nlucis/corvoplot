const express = require('express');
const app = express();
const port = process.env.PORT || 8088;
const cors = require('cors');
const path = require('path');

app.use(cors());