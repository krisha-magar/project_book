const express = require("express");
const router = express.Router();
const BookController = require("../controller/book-controller");
const CategoryController = require("../controller/category-controller");

//get all books, Request Method: Get
router.get("/books", BookController.getAllBook);

// create new book, Request Method: Post
router.post("/books", BookController.save);

// get user by id, Request Method: Get
router.get("/books/:id", BookController.getById);

router.get("/books/categories/:id", BookController.getByCategoryId);

router.put("/books/:id", BookController.update);

router.delete("/books/:id", BookController.deleteBook);

//categories routes
router.post("/categories", CategoryController.addCategory);

router.post("/categories", CategoryController.getCategories);

router.get("/categories/:id", CategoryController.categoryById);

router.put("/categories/:id", CategoryController.updateCategory);

router.delete("/categories/:id", CategoryController.deleteCategory);

module.exports = router;