import express from "express";
import dotenv from "dotenv";
import HttpError from "./middleware/HttpError.js";
import connectDB from "./config/db.js";
import bookRoutes from "./routes/book.routes.js";

dotenv.config({ path: "./.env" });

const app = express();

app.use(express.json());

app.use("/books", bookRoutes);

app.get("/", (req, res) => {
  res.json("hello from server");
});

// Route Not Found
app.use((req, res, next) => {
  return next(new HttpError(404, "requested route not found"));
});

// Error Handler
app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  res.status(error.statusCode || 500).json({
    message: error.message || "internal server error",
  });
});

const port = process.env.PORT;

async function startServer() {
  try {
    const connect = await connectDB();

    if (!connect) {
      throw new Error("failed to connect db");
    }

    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

startServer();