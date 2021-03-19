import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import config from "../config";

export const testRoute = (req: Request, res: Response) => {

    const accessToken = sign({
        test: 't'
    }, config.jwt.accessToken.secret, {
        expiresIn: config.jwt.accessToken.expiry
    });

    const refreshToken = sign({
        test: 't'
    }, config.jwt.refreshToken.secret, {
        expiresIn: config.jwt.refreshToken.expiry
    });

    res.cookie('refreshToken', refreshToken).cookie('accessToken', accessToken).send('Tokens assigned');

}

export const protectedRoute = (req: Request, res: Response) => {

    res.send('It worked');

}