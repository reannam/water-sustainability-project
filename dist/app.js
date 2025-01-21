"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const nunjucks_1 = __importDefault(require("nunjucks"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
nunjucks_1.default.configure("views/", {
    autoescape: false,
    express: app,
});
const env = nunjucks_1.default.configure("views", {
    autoescape: true,
    express: app,
});
app.use(express_1.default.static("public"));
app.set("view engine", "html");
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
//# sourceMappingURL=app.js.map