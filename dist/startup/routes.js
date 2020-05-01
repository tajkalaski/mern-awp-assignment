"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var api_1 = require("../routes/api");
module.exports = function (app) {
    app.use(express_1.default.json());
    app.use("/api", api_1.api);
};
