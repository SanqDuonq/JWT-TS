import { Request, Response, NextFunction } from 'express';
import createError, {HttpError} from 'http-errors';

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    next(createError.NotFound('This router does not exist'));
};

const errorHandler = (error:HttpError, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status).json({
        status: error.status,
        message: error.message
    })
};

export default {
    notFoundHandler,
    errorHandler,
};
