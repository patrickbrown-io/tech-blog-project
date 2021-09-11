const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {
    //  CHECK PASSWORD
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password); // compare plaintextPassword with hased personal password
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
        //  EMAIL VALIDATOR
      validate: { isEmail: true },
      unique: true,
    },
    
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [5] },
    },
  },

  {
    hooks: {
      //    BCRYPT HOOK - CREATE
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      //    BCRYPT HOOK - UPDATE
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;