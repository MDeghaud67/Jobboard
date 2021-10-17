const validator = require("validator");

const userSchema = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: [validator.isEmail, "Please supply a valid email address"],
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        resetPasswordToken: {
            type: DataTypes.STRING
        },
        resetPasswordExpires: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    }, {
        timestamps: false
    });
    User.associate = function (models) {
        User.hasMany(models.Application, { as: "applications" });
    }
    return User;
}

module.exports = userSchema;