"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtVerify = exports.jwtSign = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
function jwtSign(payload, options = {}) {
    const secret = process.env.JWT_SECRET || 't3MP0Rarys3cr37';
    const opts = Object.assign({ expiresIn: '1h' }, options);
    const signed = jsonwebtoken_1.default.sign(payload, secret, opts);
    return signed;
}
exports.jwtSign = jwtSign;
function jwtVerify(token, opts = {}) {
    const secret = process.env.JWT_SECRET || 't3MP0Rarys3cr37';
    const decoded = jsonwebtoken_1.default.verify(token, secret, opts);
    return decoded;
}
exports.jwtVerify = jwtVerify;
//# sourceMappingURL=jwt-handler.js.map