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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDirector = exports.findDirector = exports.findDirectors = void 0;
const Director_1 = __importDefault(require("../../models/Director"));
const search_params_1 = require("search-params");
function findDirectors(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const directors = yield Director_1.default.find({});
            res.status(200).json({
                msg: 'These are all the directors for you',
                directors
            });
        }
        catch (error) {
            res.status(500).json({
                msg: 'Error',
                error
            });
        }
    });
}
exports.findDirectors = findDirectors;
function findDirector(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { params } = req;
            const { query } = params;
            const q = search_params_1.parse(query);
            const { name } = q;
            const director = yield Director_1.default.find({
                name
            })
                .sort({
                _id: 1
            });
            res.status(200).json({
                msg: 'This is the director',
                director
            });
        }
        catch (error) {
            res.status(500).json({
                msg: 'Error',
                error
            });
        }
    });
}
exports.findDirector = findDirector;
function addDirector(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { body } = req;
            const director = new Director_1.default(body);
            yield director.save();
            res.status(200).json({
                msg: 'Director added',
                director
            });
        }
        catch (error) {
            res.status(500).json({
                msg: 'Error',
                error
            });
        }
    });
}
exports.addDirector = addDirector;
//# sourceMappingURL=index.js.map