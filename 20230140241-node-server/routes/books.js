const express = require("express");
const router = express.Router();

// Data Array Buku
let books = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
  { id: 3, title: "Book 3", author: "Author 3" },
  { id: 4, title: "Book 4", author: "Author 4" },
];

router.get("/", (req, res) => {
  res.json(books);
});

router.get("/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send("Book not found");

  res.json(book);
});

router.post("/", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: "Title and author are required" });
  }
  const book = {
    id: books.length + 1,
    title,
    author,
  };
  books.push(book);
  res.status(201).json(book);
});

// PUT
router.put("/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send("Book not found");

  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: "Title and author are required" });
  }

  book.title = title;
  book.author = author;
  res.json(book);
});

// DELETE
router.delete("/:id", (req, res) => {
  const bookIndex = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (bookIndex === -1) return res.status(404).send("Book not found");

  const [deletedBook] = books.splice(bookIndex, 1);

  res.json(deletedBook);
});

module.exports = router;
