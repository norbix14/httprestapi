"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = void 0;
const jwt_handler_1 = require("../../handlers/jwt-handler");
function refreshToken(req, res) {
    try {
        const { body } = req;
        const { email } = body;
        const payload = {
            email
        };
        const token = jwt_handler_1.jwtSign(payload);
        res.setHeader('Authorization', `Bearer ${token}`);
        return res.status(200).json({
            msg: 'This is your token',
            token
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: 'Error',
            error
        });
    }
}
exports.refreshToken = refreshToken;
//# sourceMappingURL=index.js.map