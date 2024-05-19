import mysql from 'mysql2'
import dotenv from 'dotenv'
const pool=mysql.createPool({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE
}).promise()
export async function getdata(Firstname,Lastname){

    const result =await pool.query(
        'SELECT * FROM login where Firstname = ?',[Firstname,Lastname]
    )
    return result
}

export async function createproperty(area,bedrooms,bathrooms,hosiptals){
    const result=await pool.query(`insert into properties(area,bedrooms,bathrooms,hospitals) VALUES (?,?)`,[area,bedrooms,bathrooms,hosiptals])
    return result;
}
