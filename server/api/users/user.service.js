const { response } = require('express')
const pool = require('../../db')

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO users(user_name, email, password)
            values(?,?,?)`,

        [data.user_name,
            data.email,
            data.password,
        ],
        (error, results, fields) => {
            if(error) {
               return callBack(error)
            }
            return callBack(null, results)
        }
        )
    },
    getUsers: callBack => {
        pool.query(
            `SELECT id, user_name, email FROM users`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                } 
                return callBack(null, results)
            }
        )
    },
    getUserById: (id, callBack) => {
        pool.query(
            `SELECT id, user_name, email FROM users`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                } return callBack(null, results[0])
            }
        )
    },
    updateUser: (data,callBack) => {
        pool.query(
            `UPDATE users set user_name=?, email=?, password=? WHERE id =?`,
            [
                data.user_name,
                data.email,
                data.password,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                } return callBack(null, results[0])
            }
        )
    },
    deleteUser: (data, callBack) => {
        pool.query(
            `DELETE FROM users WHERE id =?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                } return callBack(null, results[0])
            }
        )
    },
    getUserByEmail: (email, callBack) => {
        pool.query(
            `SELECT * FROM users WHERE email =?`,
        [email],
        (error, results, fields) => {
            if (error) {
            return callBack(error)
        } 
        return callBack(null, results[0])
    }
        )
}
}