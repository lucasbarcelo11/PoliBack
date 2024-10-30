const User = require('./Users')
const Country = require('./Country')


//      Muchos
Country.hasMany(User)

//    Uno solo
User.belongsTo(Country)