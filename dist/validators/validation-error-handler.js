"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleValidationError = void 0;
const express_validator_1 = require("express-validator");
function handleValidationError(req, res, next) {
    const result = express_validator_1.validationResult(req);
    if (result.isEmpty()) {
        return next();
    }
    const errors = result['errors'];
    const prettyErrors = [];
    const getParam = (item) => item.param;
    const getMsg = (item) => item.msg;
    const getLocation = (item) => item.location;
    const paramFields = errors.map(getParam);
    const uniqueParamFields = Array.from(new Set(paramFields));
    uniqueParamFields.forEach(param => {
        const err = errors.filter((item) => item.param === param);
        const messages = err.map(getMsg);
        const locations = err.map(getLocation);
        const location = Array.from(new Set(locations)).join(' ');
        prettyErrors.push({
            location,
            param,
            messages
        });
    });
    return res.status(400).json({
        message: 'Check all the fields are valid and completed',
        explanation: `Invalid fields: ${uniqueParamFields.join(', ')}`,
        details: {
            errors: prettyErrors
        }
    });
}
exports.handleValidationError = handleValidationError;
//# sourceMappingURL=validation-error-handler.js.map