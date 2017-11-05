module.exports = function (sequelize, DataTypes){

  const Card = sequelize.define('Card', {
    title: {type: DataTypes.STRING, allowNull: false},
    created_by: {type: DataTypes.INTEGER},
    assigned_to: {type: DataTypes.INTEGER}
  },
    {tableName: 'cards'}
  );


  Card.associate = function (models) {
    Card.belongsTo(models.User, {
      foreignKey:'assigned_to',
      as: 'Assigned'});
    Card.belongsTo(models.User, {
      foreignKey: 'created_by',
      as: 'Creator'});
    Card.belongsTo(models.Priority, {
      foreignKey: 'priorities_id',
      as: 'Priority'});
    Card.belongsTo(models.Status, {
      foreignKey: 'status_id',
      as: 'Status'});
  }

  return Card;
}