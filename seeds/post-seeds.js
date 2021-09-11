const { Post } = require('../models');

const postData = [{
        title: 'Hello World',
        content: 'Dont check stack overflow, all you find are more unanswered questions',
        user_id: 1

    },
    {
        title: 'Always be coding!',
        content: 'You know what I always say-- what did you have for lunch today?',
        user_id: 2
    },
    {
        title: 'Troubleshooting',
        content: 'Did you try turning it off and back on again?',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;