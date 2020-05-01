exports.id = "main";
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nvar helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\nvar questions_router_1 = __webpack_require__(/*! ./questions/questions.router */ \"./src/questions/questions.router.ts\");\nvar error_middleware_1 = __webpack_require__(/*! ./middleware/error.middleware */ \"./src/middleware/error.middleware.ts\");\nvar _404_middlewre_1 = __webpack_require__(/*! ./middleware/404.middlewre */ \"./src/middleware/404.middlewre.ts\");\ndotenv.config();\nif (!process.env.PORT) {\n    process.exit(1);\n}\nvar PORT = parseInt(process.env.PORT, 10);\nvar app = express_1.default();\napp.use(helmet_1.default());\napp.use(cors_1.default());\napp.use(express_1.default.json());\napp.use(express_1.default.static(\"../client/build\")); // Needed for serving production build of React\napp.use(\"/questions\", questions_router_1.questionsRouter);\n// Tajsonik add this -___-\n//app.use(\"/answers\", questionsRouter);\napp.use(error_middleware_1.errorHandler);\napp.use(_404_middlewre_1.notFoundHandler);\nif (true) {\n    module.hot.accept();\n    module.hot.dispose(function () { return server.close(); });\n}\nvar server = app.listen(PORT, function () {\n    console.log(\"Listening on port \" + PORT);\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

};