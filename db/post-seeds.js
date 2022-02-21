const { Post } = require('../models');

const postdata = [
{
    title: 'Learn to code',
<<<<<<< HEAD
    post_url: 'https://github.com/',
=======
    post_text: 'Learn to code today',
>>>>>>> develop
    user_id: 1
},
{
    title: 'Learn HTML',
<<<<<<< HEAD
    post_url: 'https://github.com/1',
=======
    post_text: 'Begin to learn HTML today',
>>>>>>> develop
    user_id: 2
},  
{
    title: 'Learn to CSS',
<<<<<<< HEAD
    post_url: 'https://github.com/3',
=======
    post_text: 'Begin to learn CSS today',
>>>>>>> develop
    user_id: 3
},  
{
    title: 'Learn Javascript',
<<<<<<< HEAD
    post_url: 'https://github.com/4',
=======
    post_text: 'Begin to learn Javascript today',
>>>>>>> develop
    user_id: 4
},  
{
    title: 'Learn Node.js',
    post_text: 'Begin to learn Node.js',
    user_id: 5
},  
{
    title: 'Learn OOP',
    post_text: 'Learn OOP today',
    user_id: 6
},      
{
    title: 'Learn Express.js',
    post_text: 'Learn expess.js',
    user_id: 7
},  
{
    title: 'Learn Databases',
    post_text: 'Learn databases today',
    user_id: 8
},  
{
    title: 'Learn Build Websites',
    post_text: 'Learn to build websites today',
    user_id: 9
},  
{
    title: 'Learn Build Phone Apps',
    post_text: 'Begin to learn apps',
    user_id: 10
}
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;