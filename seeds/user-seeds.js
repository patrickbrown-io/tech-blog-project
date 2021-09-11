const { User } = require('../models');

const userData = [{
        id: 1,
        username: 'Pat',
        email: "pat@pat.com",
        password: 'pass'

    },
    {
        id:2,
        username: 'Ben',
        email: "ben@ben.com",
        password: '1234'
    },
    {
        id:3,
        username: 'Zach',
        email:"zac@attack.com",
        password: '4321'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;


