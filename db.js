const sql = require("mssql");

require("dotenv").config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT),
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

const poolPromise = sql.connect(config)
    .then(pool => {
        console.log("Database connected successfully");
        return pool;
    })
    .catch(error => {
        console.error("Database connection failed:", error);
        throw error;
    });

module.exports = {
    sql,
    poolPromise
};