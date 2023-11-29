import mysql from "mysql2/promise";

// Ensure these environment variables are set in your deployment environment
const host = process.env.DB_HOST || "localhost";
const user = process.env.DB_USER || "mobile-hour-app";
const password = process.env.DB_PASSWORD || "Sanjay2001!";
const database = process.env.DB_DATABASE || "mobile-hour-2023";

export const db_conn = mysql.createPool({
    host,
    user,
    password,
    database
});