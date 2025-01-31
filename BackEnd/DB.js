const sql = require('mssql');

const config = {
    user: 'sa',
    password: '@Farm2963789',
    server: 'DESKTOP-V8IQOGL',
    database: 'SE',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

async function checkConnection() {
    try {
        console.log("Connecting to database...");
        const pool = await sql.connect(config);
        console.log("Connection Successful!");
        return pool;
    } catch (err) {
        console.error("Connection Failed:", err);
        throw new Error("Database connection failed");
    }
}


module.exports = checkConnection;
