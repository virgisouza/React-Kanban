module.exports = function (sequelize, DataTypes){

  const users = sequelize.define('users', {
    username: {type: DataTypes.STRING, allowNull: false},
  });

  users.associate = function (models) {
    users.hasMany(models.cards, {
      foreignKey: {
        name: 'created_by',
        allowNull: false
      }
    })
  }


  return users;
}