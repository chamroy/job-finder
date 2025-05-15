import {StatusCodes} from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err);

    const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    const message = err.message || 'something went wrong, buddy. Try again later another time'
    res.status(statusCode).json({ message });
  }

  export default errorHandlerMiddleware;