import { NextFunction, Request, Response } from "express";
import jwtVerify from '../helpers/jwtVerify'

export default (req: Request, res: Response, next: NextFunction) => {

    const { accessToken, refreshToken } = req.cookies;

    if(!jwtVerify(accessToken)) {
        return res.status(401).send('Access token is invalid');
    }

    next();

}