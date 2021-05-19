"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtBodyValidator = exports.verifyToken = exports.checkAuthorizationHeader = void 0;
const express_validator_1 = require("express-validator");
const jwt_handler_1 = require("../../handlers/jwt-handler");
function checkAuthorizationHeader(req, res, next) {
    const authorizationHeader = req.get('Authorization');
    if (!authorizationHeader) {
        return res.status(403).json({
            message: 'Access denied',
            explanation: `Missing Authorization Header`,
            details: {}
        });
    }
    next();
}
exports.checkAuthorizationHeader = checkAuthorizationHeader;
function verifyToken(req, res, next) {
    const authorizationHeader = req.get('Authorization');
    const token = authorizationHeader && authorizationHeader.split(' ')[1] || '';
    try {
        const verifyToken = jwt_handler_1.jwtVerify(token);
        if (verifyToken) {
        }
        next();
    }
    catch (error) {
        return res.status(500).json({
            message: 'Error with the given token',
            explanation: `Something wrong happened with the provided token`,
            details: {
                errors: [error]
            }
        });
    }
}
exports.verifyToken = verifyToken;
function jwtBodyValidator(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fields = [
                express_validator_1.body('email')
                    .exists()
                    .withMessage('Required field')
                    .normalizeEmail()
                    .isEmail()
                    .withMessage('Invalid email format')
            ];
            yield Promise.all(fields.map(field => field.run(req)));
            next();
        }
        catch (error) {
            return res.status(500).json({
                message: `Internal Error`,
                explanation: `Something bad happen`,
                details: {
                    errors: [error]
                }
            });
        }
    });
}
exports.jwtBodyValidator = jwtBodyValidator;
//# sourceMappingURL=index.js.map