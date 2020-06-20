const sql = require('mssql')
const config = {
    user: 'mazad',
    password: 'mazad',
    server: '192.168.1.13', // You can use 'localhost\\instance' to connect to named instance
    database: 'Mazad',


}

class dataBase {
    constructor() {


        this.instace = null;


    }

    async Query(commands) {
        const pool = await new sql.ConnectionPool(config).connect();
        try {


            let result1 = await pool.request()
                .query(commands)  ;
            return await result1.recordsets[0];

        } catch (err) {

           // console.log(err.message.toString());
            await pool.close()
        } finally {
            await pool.close();

        }
    }


    static getInstance() {

        if (this.instace == null) {
            this.instace = new dataBase()
            return this.instace;

        } else {
            return this.instace;
        }
    }
}


module.exports = {

    dataBase

};
