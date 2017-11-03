module.exports = function (sequelize, DataTypes){

  const Card = sequelize.define('Card', {
    title: {type: DataTypes.STRING,allowNull: false}},
    {tableName: 'cards'}
  );


  Card.associate = function (models) {
    Card.belongsTo(models.User, {
      foreignKey:'assigned_to',
      as: 'Assigned To',
      allowNull: false});
    Card.belongsTo(models.User, {
      foreignKey: 'created_by',
      as: 'Creator',
      allowNull: false});
    Card.belongsTo(models.Priority, {
      foreignKey: 'priorities_id',
      as: 'Priority Level',
      allowNull: false});
    Card.belongsTo(models.Status, {
      foreignKey: 'status_id',
      as: 'Status Level',
      allowNull: false});
  }

  return Card;
}