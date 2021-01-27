module.exports = function (sequelize, DataTypes) {
  const Train = sequelize.define("Train", {
    name: DataTypes.STRING,
    number: DataTypes.INTEGER,
    status: DataTypes.STRING,
    currentStation: DataTypes.STRING,
  });

  return Train;
};
