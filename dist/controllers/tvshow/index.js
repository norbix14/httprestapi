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
exports.addTvshow = exports.findTvshow = exports.findTvshows = void 0;
const TvShow_1 = __importDefault(require("../../models/TvShow"));
const search_params_1 = require("search-params");
function findTvshows(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const tvshows = yield TvShow_1.default.find({});
            res.status(200).json({
                msg: 'These are all the tv shows for you',
                tvshows
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
exports.findTvshows = findTvshows;
function findTvshow(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { params } = req;
            const { query } = params;
            const q = search_params_1.parse(query);
            const { name, episode } = q;
            const tvshow = yield TvShow_1.default.find({
                name,
                'seasons.episodes.number': episode
            }).populate('director');
            res.status(200).json({
                msg: 'This is the episode',
                tvshow
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
exports.findTvshow = findTvshow;
function addTvshow(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { body } = req;
            const tvshow = new TvShow_1.default(body);
            yield tvshow.save();
            res.status(200).json({
                msg: 'Tv show added',
                tvshow
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
exports.addTvshow = addTvshow;
//# sourceMappingURL=index.js.map