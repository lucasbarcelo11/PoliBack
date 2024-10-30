const catchError = require('../utils/catchError');
const Users = require('../models/Users');

const getAll = catchError(async (req, res) => {
    const users = await Users.findAll()
    return res.json(users);
});

module.exports = {
    getAll
};