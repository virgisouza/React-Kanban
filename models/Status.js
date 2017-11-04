module.exports = function (sequelize, DataTypes){

  const Status = sequelize.define('Status', {type:
    {type: DataTypes.STRING, allowNull: false}},
    {tableName: 'statuses'});

  Status.associate = function (models) {
    Status.hasMany(models.Card, {
      foreignKey: {
        name: 'status_id',
        as: 'Status',
        allowNull: true
      }
    })
  }


  return Status;
}