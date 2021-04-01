const mysql = require('mysql')
// const { createPool } = require("mysql")

const pool = mysql.createPool({
    connectionLimit: 20,
    password: process.env.PASS || '0103',
    user: process.env.DB_USER || 'thelma',
    database: process.env.MYSQL_DB || 'carrie_fisher_tweets',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '3306'
})

let tweetdb = {}

tweetdb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM tweets', (err, results) => {
            if(err){
                return reject(err)
            }

            return resolve(results)
        })
    })
}

tweetdb.one = (id) =>{
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM tweets WEHERE id  ?, [id]', (err, results) => {
            if(err){
                return reject(err)
            }
// [id] requests it in an array
// reminder - sql injection
            return resolve(results[0])
            // grabs first row 
        })
    })
}

module.exports = tweetdb
module.exports = pool 
// pool export (alt configuration)