import fs from "fs";
import HttpError from "../middleware/HttpError.js";
import BookModel from "../model/book.model.js";

const addBook = async (req, res, next) => {
  try {
    const {
      bookName,
      author,
      bookCode,
      category,
      price,
      description,
    } = req.body;

    const bookImage = req.files?.bookImage?.[0]?.path;

    if (
      !bookName ||
      !author ||
      !bookCode ||
      !category ||
      !price ||
      !bookImage ||
      !description
    ) {
      return next(new HttpError(400, "All fields are required"));
    }

    const book = await BookModel.create({
      bookName,
      author,
      bookCode,
      category,
      price,
      bookImage,
      description,
    });

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      book,
    });
  } catch (error) {
    return next(new HttpError(500, error.message));
  }
};

const getAllBooks = async (req, res, next) => {
  try {
    const books = await BookModel.find({});

    if (books.length === 0) {
      return next(new HttpError(404, "No books found"));
    }

    res.status(200).json({
      success: true,
      message: "All book data fetched successfully",
      total: books.length,
      books,
    });
  } catch (error) {
    return next(new HttpError(500, error.message));
  }
};

const getBookById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const book = await BookModel.findById(id);

    if (!book) {
      return next(new HttpError(404, "Book not found"));
    }

    res.status(200).json({
      success: true,
      message: "Book data fetched successfully",
      book,
    });
  } catch (error) {
    return next(new HttpError(500, error.message));
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedBook = await BookModel.findByIdAndDelete(id);

    if (!deletedBook) {
      return next(new HttpError(404, "Book not found"));
    }

    if (
      deletedBook.bookImage &&
      fs.existsSync(deletedBook.bookImage)
    ) {
      fs.unlinkSync(deletedBook.bookImage);
    }

    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      deletedBook,
    });
  } catch (error) {
    return next(new HttpError(500, error.message));
  }
};

const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;

    const book = await BookModel.findById(id);

    if (!book) {
      return next(new HttpError(404, "Book not found"));
    }

    const allowedFields = [
      "bookName",
      "author",
      "bookCode",
      "category",
      "price",
      "description",
    ];

    const updates = Object.keys(req.body);

    const isValidUpdates = updates.every((field) =>
      allowedFields.includes(field)
    );

    if (!isValidUpdates) {
      return next(
        new HttpError(400, "Only allowed fields can be updated")
      );
    }

    updates.forEach((field) => {
      book[field] = req.body[field];
    });

    if (req.files?.bookImage?.[0]) {
      if (
        book.bookImage &&
        fs.existsSync(book.bookImage)
      ) {
        fs.unlinkSync(book.bookImage);
      }

      book.bookImage = req.files.bookImage[0].path;
    }

    await book.save();

    res.status(200).json({
      success: true,
      message: "Book data updated successfully",
      book,
    });
  } catch (error) {
    return next(new HttpError(500, error.message));
  }
};

export default {
  addBook,
  getAllBooks,
  getBookById,
  deleteBook,
  updateBook,
};