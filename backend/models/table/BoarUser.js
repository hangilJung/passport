const Sequelize = require('sequelize');

module.exports = class BoardUser extends Sequelize.Model {
    static init (sequelize) {
        return super.init({
            user_id: {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            user_pw: {
                type: Sequelize.STRING(200),
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING(10),
                allowNull: false,                
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            },

        }, {
            sequelize,
            timestamps: false,
            modelName: 'BoardUser',
            tableName: 'BoardUsers',
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });        
    };
    static associate(db) {
        db.BoardUser.hasOne(db.BoardContent, {foreignKey: 'id', sourceKey: 'id'});
        db.BoardUser.hasOne(db.BoardComment, {foreignKey: 'id', sourceKey: 'id'});
        db.BoardUser.hasOne(db.BoardSubComment, {foreignKey: 'id', sourceKey: 'id'});

    }
};