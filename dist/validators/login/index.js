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
exports.loginBodyValidator = void 0;
const express_validator_1 = require("express-validator");
function loginBodyValidator(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fields = [
                express_validator_1.body('email')
                    .exists()
                    .withMessage('Required field')
                    .normalizeEmail()
                    .isEmail()
                    .withMessage('Invalid email format'),
                express_validator_1.body('password')
                    .exists()
                    .withMessage('Required field')
                    .notEmpty()
                    .withMessage('Field should not be empty'),
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
exports.loginBodyValidator = loginBodyValidator;
//# sourceMappingURL=index.js.map