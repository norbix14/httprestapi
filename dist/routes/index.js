"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const login_1 = __importDefault(require("./login"));
const jwt_1 = __importDefault(require("./jwt"));
const movie_1 = __importDefault(require("./movie"));
const tvshow_1 = __importDefault(require("./tvshow"));
const director_1 = __importDefault(require("./director"));
const app = express_1.default();
function default_1() {
    app.use('/login', login_1.default());
    app.use('/jwt', jwt_1.default());
    app.use('/movies', movie_1.default());
    app.use('/tvshows', tvshow_1.default());
    app.use('/directors', director_1.default());
    return app;
}
exports.default = default_1;
//# sourceMappingURL=index.js.map