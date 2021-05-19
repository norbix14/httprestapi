"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jwt_1 = require("../validators/jwt");
const movies_1 = require("../controllers/movies");
const router = express_1.Router();
function default_1() {
    router.get('/', jwt_1.checkAuthorizationHeader, jwt_1.verifyToken, movies_1.findMovies);
    router.get('/search/:query', jwt_1.checkAuthorizationHeader, jwt_1.verifyToken, movies_1.findMovie);
    router.post('/', jwt_1.checkAuthorizationHeader, jwt_1.verifyToken, movies_1.addMovie);
    return router;
}
exports.default = default_1;
//# sourceMappingURL=movie.js.map