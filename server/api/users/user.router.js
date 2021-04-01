const { createUser, 
    getUserById, 
    getUsers, 
    updateUser, 
    deleteUser,
    login
} = require("./user.controller")
const router = require('express').Router()
const { checkToken } = require('../../auth/token_validation')


router.post("/", checkToken, createUser)
router.get("/", checkToken, getUsers)
router.get('/:id', checkToken, getUserById)
router.patch('/', checkToken, updateUser)
router.delete('/', checkToken, deleteUser)
// you could hypothetically set up delete to take
// router.delete('/:id) - would require some changes to controller
router.post('/login', login)
module.exports = router