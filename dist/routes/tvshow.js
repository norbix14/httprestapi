"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jwt_1 = require("../validators/jwt");
const tvshow_1 = require("../controllers/tvshow");
const router = express_1.Router();
function default_1() {
    router.get('/', jwt_1.checkAuthorizationHeader, jwt_1.verifyToken, tvshow_1.findTvshows);
    router.get('/:query', jwt_1.checkAuthorizationHeader, jwt_1.verifyToken, tvshow_1.findTvshow);
    router.post('/', jwt_1.checkAuthorizationHeader, jwt_1.verifyToken, tvshow_1.addTvshow);
    return router;
}
exports.default = default_1;
//# sourceMappingURL=tvshow.js.map