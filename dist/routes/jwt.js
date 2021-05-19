"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jwt_1 = require("../controllers/jwt");
const jwt_2 = require("../validators/jwt");
const validation_error_handler_1 = require("../validators/validation-error-handler");
const router = express_1.Router();
function default_1() {
    router.post('/refresh', jwt_2.jwtBodyValidator, validation_error_handler_1.handleValidationError, jwt_1.refreshToken);
    return router;
}
exports.default = default_1;
//# sourceMappingURL=jwt.js.map