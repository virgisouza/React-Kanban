module.exports = function (sequelize, DataTypes){

  const Status = sequelize.define('Statuses', {type:
    {type: DataTypes.STRING, allowNull: false}},
    {tableName: 'statuses'});

  Status.associate = function (models) {
    Status.hasMany(models.Card, {
      foreignKey: {
        name: 'status_id',
        allowNull: true
      }
    })
  }


  return Status;
}