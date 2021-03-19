const config = {
    mode: process.env.NODE_ENV || 'dev',
    apiPort: process.env.API_PORT || 5000,
    jwt: {
        accessToken: {
            secret: process.env.ACCESS_SECRET || 'test',
            expiry: process.env.ACCESS_EXPIRY || '15m'
        },
        refreshToken: {
            secret: process.env.REFRESH_SECRET || 'test',
            expiry: process.env.REFRESH_EXPIRY || '1w'
        }
    }
};

export default config;