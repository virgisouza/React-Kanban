module.exports = function (sequelize, DataTypes){

  const status = sequelize.define('statuses', {
    type: {type: DataTypes.STRING, allowNull: false}
  });

  status.associate = function (models) {
    status.hasMany(models.cards, {
      foreignKey: {
        name: 'status_id',
        allowNull: true
      }
    })
  }


  return status;
}