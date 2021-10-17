
const jobSchema = function (sequelize, DataTypes) {
    const Job = sequelize.define('Job', {
        title: {
            type: DataTypes.STRING
        },
        companyId: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
        experienceRequired: {
            type: DataTypes.STRING
        },
        workingTime: {
            type: DataTypes.STRING
        },
        startAt: {
            type: DataTypes.DATE
        },
        income: {
            type: DataTypes.STRING
        },
        localisation: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    }, {});
    Job.associate = function (models) {
        Job.belongsTo(models.Company, { foreignKey: 'companyId', as: 'Company' });
    }
    return Job;
}


module.exports = jobSchema;