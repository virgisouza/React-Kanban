module.exports = function (sequelize, DataTypes){

  const User = sequelize.define('User', {
    username: {type: DataTypes.STRING, allowNull: false}},
    {tableName: 'users'});

  User.associate = function (models) {
    User.hasMany(models.Card, {
      foreignKey: 'created_by',
      as: 'Cards'
    });
    User.hasMany(models.Card, {
      foreignKey: 'assigned_to',
      as: 'Tasks'
    });
  }


  return User;
}