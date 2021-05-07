const Sequelize = require('sequelize');

module.exports = class BoardSubComment extends Sequelize.Model {
    static init (sequelize) {
        return super.init({
            subcomment_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            context: {
                type: Sequelize.STRING(500),
                allowNull: false,                
            },
        }, {
            sequelize,
            timestamps: true,
            underscored: true,
            modelName: 'BoardUser',
            tableName: 'BoardUsers',
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    };

    static associate(db) {
        db.BoardContent.belongsTo(db.BoardUser, {foreignKey: 'User_id', targetKey: 'user_id' });

    }
};