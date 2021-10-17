
const applicationSchema = function (sequelize, DataTypes) {
    const Application = sequelize.define('Application', {
        userId: {
            type: DataTypes.INTEGER,
        },
        jobId: {
            type: DataTypes.INTEGER
        },
        text: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: "Pending"
        },
        accepted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    }, {});
    Application.associate = function (models) {
        Application.belongsTo(models.User, { foreignKey: 'userId', as: 'User' });
        Application.belongsTo(models.Job, { foreignKey: "jobId", as: 'Job' });
    }
    return Application;
}

module.exports = applicationSchema;


