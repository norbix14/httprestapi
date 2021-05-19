"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jwt_1 = require("../validators/jwt");
const director_1 = require("../controllers/director/");
const router = express_1.Router();
function default_1() {
    router.get('/', jwt_1.checkAuthorizationHeader, jwt_1.verifyToken, director_1.findDirectors);
    router.get('/:query', jwt_1.checkAuthorizationHeader, jwt_1.verifyToken, director_1.findDirector);
    router.post('/', jwt_1.checkAuthorizationHeader, jwt_1.verifyToken, director_1.addDirector);
    return router;
}
exports.default = default_1;
//# sourceMappingURL=director.js.map