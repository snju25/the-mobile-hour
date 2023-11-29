import mysql from "mysql2/promise"

export const db_conn = mysql.createPool({
    host: "localhost",
    user: "mobile-hour-app",
    password : "Sanjay2001!",
    database: "mobile-hour-2023"
})