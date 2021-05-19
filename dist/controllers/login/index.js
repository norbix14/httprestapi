"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const jwt_handler_1 = require("../../handlers/jwt-handler");
function login(req, res) {
    const { body } = req;
    const { email } = body;
    const payload = {
        email
    };
    const token = jwt_handler_1.jwtSign(payload);
    res.setHeader('Authorization', `Bearer ${token}`);
    res.status(200).json({
        msg: 'This is your token',
        token
    });
}
exports.login = login;
//# sourceMappingURL=index.js.map