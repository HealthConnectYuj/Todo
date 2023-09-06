import sql from "mssql";
import dotenv from "dotenv";

// load environment variables from the .env
dotenv.config();



const pool = sql.connect({
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
    encrypt: false, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
});

const request = new sql.Request();

export default { pool, request };
