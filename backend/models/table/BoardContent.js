const Sequelize = require('sequelize');

module.exports = class BoardContent extends Sequelize.Model {
    static init (sequelize) {
        return super.init({
            content_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: Sequelize.STRING(100),
                allowNull: false,                
            },
            context: {
                type: Sequelize.STRING(500),
                allowNull: false,                
            },
        }, {
            sequelize,
            timestamps: true,
            underscored: true,
            modelName: 'BoardContent',
            tableName: 'BoardContents',
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }; 

    static associate(db) {
        db.BoardContent.belongsTo(db.BoardUser, {foreignKey: 'id', targetKey: 'id' });
        db.BOardContent.hasMany(db.BoardComment, { foreignKey: 'content_id', sourceKey: 'content_id'})
        
    }
};