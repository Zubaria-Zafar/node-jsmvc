const express = require("express");
const router = express.Router();

const bookController = require('../controllers/books.controllers');


const checkAuth = require('../middleware/check-auth');


router.get("/",checkAuth, bookController.getAll);
router.post("/add",checkAuth,bookController.addBook);
router.get("/:_id",checkAuth,bookController.getSingleBook);
router.delete("/:_id",checkAuth, bookController.deleteBook);
router.put("/:_id",checkAuth, bookController.updateBook);


module.exports = router;