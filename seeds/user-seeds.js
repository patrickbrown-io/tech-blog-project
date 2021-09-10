const { User } = require('../models');

const userData = [{
        username: 'Pat',
        password: 'pass'

    },
    {
        username: 'Ben',
        password: '1234'
    },
    {
        username: 'Zach',
        password: '4321'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;