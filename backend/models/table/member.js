const Sequelize = require('sequelize');

module.exports = class Member extends Sequelize.Model {
    static init(sequelize) {
      return super.init({
          userid: {
            type: Sequelize.STRING(10),
                allowNull: true,
                unique: true,
          },
          userpw: {
                type: Sequelize.STRING(100),
                allowNull: true,
          }
      },{
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Member',
        tableName: 'members',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      });
    }
}
