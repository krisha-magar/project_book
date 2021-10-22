const CategoryId = require("./category-controller");
let books = []; // id, title, description, bookId, author, createdDate

//crud
// add new book, Request Method: Post
const save = (req, res) => {
  books.push(req.body);
  res.status(201).json(req.body);
};

//get all books, Request Method: Get
const getAllBook = (req, res) => {
  res.json(books);
};

// get book by id, Request Method: Get
const getById = (req, res) => {
  let book = books.find(book => book.id === parseInt(req.params.id));
  if (!book) res.status(404).send('The book with the given ID was not found.');
  res.json(book);
}
// get book by categoryId, Request Method: Get
const getByCategoryId = (req, res) => {
  let data = CategoryId.categoryById;
  // //let book = books.find(category => category.id === parseInt(req.params.id));
  // if (!data) res.status(404).send('The book with the given category ID was not found.');
  // res.json(data);
}

//update book
const update = (req, res) => {
  let bookIndex = books.findIndex((book) => book.id === parseInt(req.params.id));
  // // to know the index 
  // res.json({
  //   index: bookIndex,
  // })
  if(bookIndex === -1) {
    return res.status(404).json({
      error: "The book with the given id was not found",
    });
  }
  
  books[bookIndex]["id"] = req.body.id;
  books[bookIndex]["title"] = req.body.title;
  books[bookIndex]["description"] = req.body.description;
  books[bookIndex]["bookId"] = req.body.bookId;
  books[bookIndex]["author"] = req.body.author;
  books[bookIndex]["createdDate"] = req.body.createdDate;
  res.json(req.body)
};

//delete book by
const deleteBook = (req, res) => {
  let bookIndex = books.findIndex(
    (book) => book.id === parseInt(req.params.id)
  );
  if (bookIndex === -1) {
    return res.status(404).json({
      error: "The book with the given ID was not found",
    });
  }
  books.splice(bookIndex, 1);
  res.status(204).json({message: "The book has been deleted"});

};


module.exports = {
  save,
  getAllBook,
  getById,
  getByCategoryId,
  update,
  deleteBook,
};