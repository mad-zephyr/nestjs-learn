"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMongoConfig = void 0;
const getMongoConfig = async (configService) => {
    return Object.assign({ uri: getMongoString(configService) }, getMongoOptions());
};
exports.getMongoConfig = getMongoConfig;
const getMongoString = (configService) => {
    if (process.env.NODE_ENV === 'development') {
        console.log('development-------');
        return ('mongodb://' +
            configService.get('MONGO_LOGIN_DEV') +
            ':' +
            configService.get('MONGO_PASSWORD_DEV') +
            '@' +
            configService.get('MONGO_HOST_DEV') +
            ':' +
            configService.get('MONGO_PORT') +
            '/' +
            configService.get('MONGO_AUTH_DB'));
    }
    return ('mongodb://' +
        configService.get('MONGO_LOGIN_PRODUCTION') +
        ':' +
        configService.get('MONGO_PASSWORD_PRODUCTION') +
        '@' +
        configService.get('MONGO_HOST_PRODUCTION') +
        ':' +
        configService.get('MONGO_PORT') +
        '/' +
        configService.get('MONGO_AUTH_DB'));
};
const getMongoOptions = () => ({
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
//# sourceMappingURL=mongo.config.js.map