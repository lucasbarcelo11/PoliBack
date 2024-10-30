const catchError = require('../utils/catchError');
const Country = require('../models/Country');

const getAll = catchError(async (req, res) => {
    const country = await Country.findAll()
    return res.json(country);
});

const create = catchError(async(req,res) => {
    const country = await Country.create(req.body)
    return res.status(201).json(country)
})

module.exports = {
    getAll,
    create
};