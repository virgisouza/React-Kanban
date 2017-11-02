module.exports = function (sequelize, DataTypes){

  const priority = sequelize.define('priorities', {
    type: {type: DataTypes.STRING, allowNull: false} //low, medium, high, blocker
  });

  priority.associate = function (models) {
    priority.hasMany(models.cards, {
      foreignKey: {
        name: 'priorities_',
        allowNull: false
      }
    });
  }

  return priority;
}