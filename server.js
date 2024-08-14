require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./app/routes/router");
const cors = require("cors");
const connectToDatabase = require("./app/middlewares/db");
const { useErrorHandler, CustomError } = require("./app/middlewares/errorHandler");

connectToDatabase();
app.use(cors());
app.use(express.json());

app.use("/api/v1", router);

app.get("/healthCheck", (req, res) => {
  res.status(200).json({
    success: true,
  });
});

// app.use((err, req, res, next) => {
//     // Log the detailed error for internal purposes
//     console.error(err.stack);

//     // Determine if the error is an instance of CustomError
//     const statusCode = err instanceof CustomError ? err.statusCode : 500;

//     // Send a generic error message to the client
//     res.status(statusCode).json({
//         success: false,
//         message: 'An error occurred. Please try again later.'
//     });
// });

app.use(useErrorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is up at PORT", PORT);
});