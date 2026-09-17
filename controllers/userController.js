const superAdminService = require("../services/userService");

const superAdminLogin = async (req, res) => {
    try {
        const { usernameOrEmail, password } = req.body;

        const result = await superAdminService.superAdminLogin(
            usernameOrEmail,
            password
        );

        return res.status(200).json(result);

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Login failed"
        });
    }
};

module.exports = {
    superAdminLogin
};