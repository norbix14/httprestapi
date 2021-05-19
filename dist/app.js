"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes/"));
const custom_error_handler_1 = require("./handlers/custom-error-handler");
const db_1 = __importDefault(require("./config/db"));
dotenv_1.default.config();
const app = express_1.default();
const uri = process.env.URI_MONGODB || '';
db_1.default(uri);
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(cors_1.default());
app.use('/api/v1/improvein', routes_1.default());
app.use(custom_error_handler_1.createNotFoundError);
app.use(custom_error_handler_1.handleNotFoundError);
exports.default = app;
//# sourceMappingURL=app.js.map