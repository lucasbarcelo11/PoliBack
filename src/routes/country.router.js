const { getAll, create } = require('../controllers/country.controllers');
const express = require('express');

const countryRouter = express.Router();

countryRouter.route('/countries')
    .get(getAll)
    .post(create)

module.exports = countryRouter;