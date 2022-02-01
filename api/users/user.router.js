/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns all posts
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: the list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 */

const { 
    createUser, 
    login,
    getUserByUserId,
    getUsers,
    updateUsers,
    deleteUser 
} = require("./user.controller");
const { checkToken } = require("../../auth/token_validation");
const router = require("express").Router();







router.get("/", checkToken, getUsers);
router.post("/", checkToken, createUser);
router.get("/:id", checkToken, getUserByUserId);
router.post("/login", login);
router.post("/register", createUser);
router.patch("/", checkToken, updateUsers);
router.delete("/", checkToken, deleteUser);

module.exports = router; 