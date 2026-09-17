const { sql, poolPromise } = require("../db");

const superAdminLogin = async (usernameOrEmail, passwordPlain) => {
    const pool = await poolPromise;

    const result = await pool
        .request()
        .input("UsernameOrEmail", sql.VarChar(255), usernameOrEmail)
        .input("PasswordPlain", sql.VarChar(255), passwordPlain)
        .execute("sp_SuperAdminLogin");

    return result.recordset;
};

module.exports = {
    superAdminLogin
};