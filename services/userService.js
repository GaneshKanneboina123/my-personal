const superAdminRepository = require("../repositories/userRepository");

const superAdminLogin = async (usernameOrEmail, password) => {
    const result = await superAdminRepository.superAdminLogin(
        usernameOrEmail,
        password
    );

    return result;
};

module.exports = {
    superAdminLogin
};