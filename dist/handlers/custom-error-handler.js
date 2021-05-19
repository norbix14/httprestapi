"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleNotFoundError = exports.createNotFoundError = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const createNotFoundError = function (req, res, next) {
    next(http_errors_1.default(404));
};
exports.createNotFoundError = createNotFoundError;
const handleNotFoundError = function (err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    const error = Object.assign(Object.assign({}, err), { details: 'Resource not found', status: err.status || 500 });
    res.status(error.status).json(error);
};
exports.handleNotFoundError = handleNotFoundError;
//# sourceMappingURL=custom-error-handler.js.map