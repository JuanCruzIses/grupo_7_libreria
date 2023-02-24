import {config} from 'dotenv'
config()

export const PORT = process.env.PORT 
export const DB_HOST = process.env.DB_HOST || "127.0.0.1"
export const DB_USER = process.env.DB_USER || "root"
export const DB_PASSWORD = process.env.DB_PASSWORD || ''
export const DB_NAME = process.env.DB_NAME || 'sombreroloco'
export const DB_PORT = process.env.DB_PORT || 3306
// export const DB_URL = process.env.DB_URL || 'mysql://u60oo5vlmwcs3448:3XtG9Udbhs4rcIdDCmKI@bebcvpxe4wunqghg6wj3-mysql.services.clever-cloud.com:3306/bebcvpxe4wunqghg6wj3'

