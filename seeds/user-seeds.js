const { User } = require('../models');

const userData = [{
        id: 1,
        username: 'Pat',
        email: "pat@pat.com",
        password: 'pass1234'

    },
    {
        id:2,
        username: 'Ben',
        email: "ben@ben.com",
        password: 'pass1234'
    },
    {
        id:3,
        username: 'Zach',
        email:"zac@attack.com",
        password: 'pass1234'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;


