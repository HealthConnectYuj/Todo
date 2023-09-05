import sql from "mssql";

// load environment variables from the .env

const pool = sql.connect({
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
    encrypt: false, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
});

const request = new sql.Request();

export default { pool, request };
