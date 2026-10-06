import express from "express";
import bookController from "../controller/book.controller.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post(
    "/addBook",
    upload.fields([
        { name: "bookImage", maxCount: 1 }
    ]),
    bookController.addBook
);

router.get("/showAllBook", bookController.getAllBooks);

router.get("/showBook/:id", bookController.getBookById);

router.delete("/deleteBook/:id", bookController.deleteBook);

router.put(
    "/updateBook/:id",
    upload.fields([
        { name: "bookImage", maxCount: 1 }
    ]),
    bookController.updateBook
);

export default router;