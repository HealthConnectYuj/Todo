"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mssql_1 = __importDefault(require("mssql"));
// load environment variables from the .env
const pool = mssql_1.default.connect({
    user: "sa",
    password: "Iforgot#123",
    database: "ywodatabase",
    server: "YUJI-PC\\SQLEXPRESS",
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
