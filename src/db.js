import {DB_HOST, DB_NAME, DB_USER, DB_PORT, DB_PASSWORD } from  './config.js' 
import mysql from 'mysql2';

export const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})


