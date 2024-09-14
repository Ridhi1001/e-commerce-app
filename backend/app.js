const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config();

const { createUserTable } = require('./models/User');
const { createProductTable } = require('./models/Product');
const { createCartTable } = require('./models/Cart');

createUserTable();
createProductTable();
createCartTable();


const authRoutes = require('./routes/authRoutes');
const sellerRoutes = require('./routes/sellerRoutes');
const buyerRoutes = require('./routes/buyerRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/seller', sellerRoutes);
app.use('/buyer', buyerRoutes);

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
