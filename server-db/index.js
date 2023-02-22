const user = require('./user.json');
const products = require('./product.json');
const restaurants = require('./restaurants.json');
const carts = require('./carts');
const favorites = require('./favorites.json');
const orders = require('./orders.json');

module.exports = () => ({
    user,
    products,
    restaurants,
    carts,
    favorites,
    orders
})