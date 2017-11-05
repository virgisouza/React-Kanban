module.exports = function (sequelize, DataTypes){

  const Priority = sequelize.define('Priority', {
    type: {type: DataTypes.STRING, allowNull: false}},
    {tableName: 'priorities'});

  Priority.associate = function (models) {
    Priority.hasMany(models.Card, {foreignKey:'priorities_id', as:'Priority'});
  };

  return Priority;
}