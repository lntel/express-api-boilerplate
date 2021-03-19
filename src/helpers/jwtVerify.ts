import { verify } from 'jsonwebtoken'
import config from '../config'

export default (token: string) => {
    try {
        const result = (verify(token, config.jwt.accessToken.secret) as object);

        return result;
    } catch (error) {
        // Just assume it's invalid
        return false;
    }
}