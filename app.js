const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

const sequelize = require('./utility/database');
const Category = require('./model/category');
const Product = require('./model/product');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin', adminRoutes);
app.use(userRoutes);

app.use((req, res) => {
    res.status(404);
    res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.use('/product-list', (req, res, next) => {
    console.log("Middleware 2 running.");
    res.send('<h1>Product Listing Page</h1>');
});

sequelize.sync()
    .then(result => {
        console.log('Database synced successfully.');
        app.listen(3000, () => {
            console.log('Listening on port 3000');
        });
    })
    .catch(err => {
        console.error('Error syncing database:', err);
    });
