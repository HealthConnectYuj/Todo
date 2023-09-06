"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mssql_1 = __importDefault(require("mssql"));
const dotenv_1 = __importDefault(require("dotenv"));
// load environment variables from the .env
dotenv_1.default.config();
const pool = mssql_1.default.connect({
    // user: "sa",
    // password: "Iforgot#123",
    // database: "ywodatabase",
    // server: "YUJI-PC\\SQLEXPRESS",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    server: `${process.env.DB_SERVER}`,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    },
    options: {
        encrypt: false,
        trustServerCertificate: true, // change to true for local dev / self-signed certs
    },
});
const request = new mssql_1.default.Request();
exports.default = { pool, request };
