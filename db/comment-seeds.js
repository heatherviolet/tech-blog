const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'I like to eat tacos.',
        user_id: 1,
        post_id: 7
    },
    {
        comment_text: 'I like to eat cheese.',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'I like to eat ice cream.',
        user_id: 3,
        post_id: 10
    },
    {
        comment_text: 'I like to eat peppers.',
        user_id: 4,
        post_id: 2
    },
    {
        comment_text: 'I like to eat onions.',
        user_id: 5,
        post_id: 3
    },
    {
        comment_text: 'I like to eat pickles.',
        user_id: 6,
        post_id: 4
    },
    {
        comment_text: 'I like to eat cake.',
        user_id: 7,
        post_id: 6
    },
    {
        comment_text: 'I like to eat cookies.',
        user_id: 8,
        post_id: 9
    },
    {
        comment_text: 'I like to eat chocolate.',
        user_id: 9,
        post_id: 8
    },
    {
        comment_text: 'I like to eat apples.',
        user_id: 10,
        post_id: 5
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;