const { Post } = require('../models');

const postdata = [
{
    title: 'Learn to code',
    post_url: 'https://github.com/',
    user_id: 1
},
{
    title: 'Learn HTML',
    post_url: 'https://github.com/1',
    user_id: 2
},  
{
    title: 'Learn to CSS',
    post_url: 'https://github.com/3',
    user_id: 3
},  
{
    title: 'Learn Javascript',
    post_url: 'https://github.com/4',
    user_id: 4
},  
{
    title: 'Learn Node.js',
    post_url: 'https://github.com/5',
    user_id: 5
},  
{
    title: 'Learn OOP',
    post_url: 'https://github.com/6',
    user_id: 6
},      
{
    title: 'Learn Express.js',
    post_url: 'https://github.com/7',
    user_id: 7
},  
{
    title: 'Learn Databases',
    post_url: 'https://github.com/8',
    user_id: 8
},  
{
    title: 'Learn Build Websites',
    post_url: 'https://github.com/9',
    user_id: 9
},  
{
    title: 'Learn Build Phone Apps',
    post_url: 'https://github.com/10',
    user_id: 10
}
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;