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
exports.addMovie = exports.findMovie = exports.findMovies = void 0;
const Movie_1 = __importDefault(require("../../models/Movie"));
const search_params_1 = require("search-params");
function findMovies(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const movies = yield Movie_1.default.find({});
            res.status(200).json({
                msg: 'These are all the movies for you',
                movies
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
exports.findMovies = findMovies;
function findMovie(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { params } = req;
            const { query } = params;
            const q = search_params_1.parse(query);
            const { name, sort } = q;
            const movies = yield Movie_1.default.find({
                name
            })
                .sort({
                _id: sort || -1
            });
            res.status(200).json({
                msg: 'These movies are for you',
                movies
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
exports.findMovie = findMovie;
function addMovie(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { body } = req;
            const movie = new Movie_1.default(body);
            yield movie.save();
            res.status(200).json({
                msg: 'Movie added',
                movie
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
exports.addMovie = addMovie;
//# sourceMappingURL=index.js.map