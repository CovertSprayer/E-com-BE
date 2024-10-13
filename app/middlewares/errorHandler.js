const { NODE_ENV } = process.env;

class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode || 500;
    Error.captureStackTrace(this, this.constructor);
  }
}

class NotFoundError extends CustomError {
  constructor(message) {
    super(message, 404);
  }
}

class BadRequestError extends CustomError {
  constructor(message) {
    super(message, 400);
  }
}

class UnauthorizedError extends CustomError {
  constructor(message) {
    super(message, 401);
  }
}

const useErrorHandler = (err, req, res, next) => {
  const isDevelopment = NODE_ENV === "development";

  console.error(err.stack);
  const statusCode = err instanceof CustomError ? err.statusCode : 500;

  res.status(statusCode).json({
    success: false,
    message: isDevelopment
      ? err.message
      : "An error occurred. Please try again later.",
    error: isDevelopment ? err.stack : "error",
  });
};

const errorHandler = (err, req, res, next) => {
  if (NODE_ENV === "development") {
    res.status(err.status || 500).json({ error: err });
  } else {
    res.status(err.status || 500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  errorHandler,
  useErrorHandler,
  CustomError,
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
};
