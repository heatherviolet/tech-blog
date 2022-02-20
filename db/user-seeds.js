const { Post, User } = require('../models');
const sequelize = require('../config/connection');

const userdata = [
    {
        username: "salsatacos",
        password: "ABC123",
        email: "email@email.com"
    },
    {
        username: "saltysea",
        password: "123HIJ",
        email: "code@email.com"
    },
    {
        username: "tikitotem",
        password: "FYGHJaa",
        email: "first@email.com"
    },
    {
        username: "pomeranian",
        password: "sdgipakfds",
        email: "second@email.com"
    },
    {
        username: "lilyflower",
        password: "1234567aa",
        email: "third@email.com"
    },
    {
        username: "fluffycloud",
        password: "JIJhhhh",
        email: "fourth@email.com"
    },
    {
        username: "useruser",
        password: "678IJK",
        email: "fifth@email.com"
    },
    {
        username: "spicytortilla",
        password: "werew",
        email: "six@email.com"
    },
    {
        username: "glitterice",
        password: "436543",
        email: "seven@email.com"
    },
    {
        username: "cakepotato",
        password: "AB667123",
        email: "last@email.com"
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;

