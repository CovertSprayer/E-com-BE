exports.responseHandler = (
  res,
  data = {},
  message = "Success",
  statusCode = 200
) => {
  res.status(statusCode).json({
    success: true,
    message,
    result: data,
  });
};
