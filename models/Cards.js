module.exports = function (sequelize, DataTypes){

  const cards = sequelize.define('cards', {
    title: {type: DataTypes.STRING, allowNull: false},
  });


  cards.associate = function (models) {
    cards.belongsTo(models.users, {
      foreignKey: {
        name: 'assigned_to',
        allowNull: false
      }
    })
  }

  return cards;
}