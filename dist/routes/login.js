"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_1 = require("../controllers/login/");
const login_2 = require("../validators/login");
const validation_error_handler_1 = require("../validators/validation-error-handler");
const router = express_1.Router();
function default_1() {
    router.post('/', login_2.loginBodyValidator, validation_error_handler_1.handleValidationError, login_1.login);
    return router;
}
exports.default = default_1;
//# sourceMappingURL=login.js.map