"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.Promise = global.Promise;
require("../models/Actor");
require("../models/Director");
require("../models/Movie");
require("../models/TvShow");
function default_1(uri, options = {}) {
    try {
        if (!uri || uri.length <= 0) {
            throw new Error('Invalid URI connection');
        }
        const opts = Object.assign({ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }, options);
        mongoose_1.default.connect(uri, opts);
        mongoose_1.default.connection.on('connected', () => console.log('MongoDB connected'));
        mongoose_1.default.connection.on('error', () => console.log('MongoDB fail to connect'));
    }
    catch (err) {
        console.log(err);
        console.log('Something wrong happened with MongoDB');
    }
}
exports.default = default_1;
//# sourceMappingURL=db.js.map