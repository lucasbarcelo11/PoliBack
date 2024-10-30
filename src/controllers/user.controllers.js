const catchError = require('../utils/catchError');
const Users = require('../models/Users');
const Country = require('../models/Country')

const getAll = catchError(async (req, res) => {
    const users = await Users.findAll({include: [Country]})
    return res.json(users);
});

const create = catchError (async(req, res) => {
    const {name, email, countryId} = req.body
    const user = await Users.create({name,email, countryId})
    return res.status(201).json(user)
})

module.exports = {
    getAll,
    create
};