
let categories = []; // id, title, createdDate

//crud

// create new category, Request Method: Post
const addCategory =(req, res) => {
  categories.push(req.body);
  res.status(201).json(req.body);
};

//get all categories, Request Method: Get

const getCategories = (req, res) => {
  res.json(categories);
};


// get category by id, Request Method: Get
const categoryById = (req, res) => {
  let category = categories.find(category => category.id === parseInt(req.params.id));
  if (!category) res.status(404).send('The category with the given ID was not found.');
  res.json(category);
};

//update category
const updateCategory = (req, res) => {
  let categoryIndex = categories.findIndex((category) => category.id === parseInt(req.params.id));
  // // to know the index 
  // res.json({
  //   index: categoryIndex,
  // })
  if(categoryIndex === -1) {
    return res.status(404).json({
      error: "The category with the given id was not found",
    });
  }
  
  categories[categoryIndex]["id"] = req.body.id;
  categories[categoryIndex]["title"] = req.body.title;
  categories[categoryIndex]["createdDate"] = req.body.createdDate;
  res.json(req.body)
};

//delete category by
const deleteCategory = (req, res) => {
  let categoryIndex = categories.findIndex(
    (category) => category.id === parseInt(req.params.id)
  );
  if (categoryIndex === -1) {
    return res.status(404).json({
      error: "The category with the given ID was not found",
    });
  }
  categories.splice(categoryIndex, 1);
  res.status(204).json({message: "The category has been deleted"});

};
const externalId = (value) => {
  value = category.id
  console.log("value", value);
};

module.exports = {
  addCategory,
  getCategories,
  categoryById,
  updateCategory, 
  deleteCategory,
  externalId,
}