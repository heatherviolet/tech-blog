const { Model, DataTypes } = require('sequalize');
const sequalize = require('../config/connection');

// creates User model
class User extends Model {};

User.init({
    // defines colums
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: { 
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6]
        }
    }
},
{
    sequalize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
}
);

module.exports = User;