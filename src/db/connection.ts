import {Sequelize} from 'sequelize'
const sequelize = new Sequelize('almacen','root','Angularoot123',{
    host: 'localhost',
    dialect:'mysql',
    //logging: false esto es simplemente para que en la consola no salga las consultas
})
export default sequelize;