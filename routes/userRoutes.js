const express = require("express");
const superAdminController = require("../controllers/userController");

const router = express.Router();

router.post("/super-admin/login", superAdminController.superAdminLogin);

module.exports = router;