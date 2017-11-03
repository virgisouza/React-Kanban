module.exports = function (sequelize, DataTypes){

  const Card = sequelize.define('Card', {
    title: {type: DataTypes.STRING,allowNull: false}},
    {tableName: 'cards'}
  );


  Card.associate = function (models) {
    Card.belongsTo(models.User, {
      foreignKey:'assigned_to',
      as: 'Creator',
      allowNull: false});
    Card.belongsTo(models.User, {
      foreignKey: 'created_by',
      as: 'Dev',
      allowNull: false
    });
  }

  return Card;
}