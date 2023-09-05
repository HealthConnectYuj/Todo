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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const database_1 = __importDefault(require("./data/database"));
const todo_route_1 = __importDefault(require("./routes/todo-route"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
dotenv_1.default.config();
const PORT = process.env.PORT;
const SERVER = process.env.DB_SERVER;
app.use("/toDo", todo_route_1.default);
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sqlconnect = yield database_1.default.pool;
        const result = sqlconnect.request();
        console.log("Connected at dbase...");
        console.log(`Server location: ${SERVER}`);
    }
    catch (error) {
        console.error(error);
    }
});
app.listen(4001, () => {
    console.log(`App is running on port: 4001`);
});
connect();
