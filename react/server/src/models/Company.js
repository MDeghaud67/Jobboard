const companySchema = function (sequelize, DataTypes) {
    const Company = sequelize.define('Company', {
        name: {
            type: DataTypes.STRING,
            unique: true,
        },
        image: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING
        },
        employees: {
            type: DataTypes.INTEGER
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    }, {});
    Company.associate = function (models) {
        Company.hasMany(models.Job, { as: "Jobs" });
    }
    Company.addHook("beforeDestroy", (company, options) => {
        sequelize.models.Job.destroy({
            where: { companyId: company.id }
        })
    });
    return Company;
}


module.exports = companySchema;