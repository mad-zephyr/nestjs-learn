import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<MongooseModuleOptions> => {
  return {
    uri: getMongoString(configService),
    ...getMongoOptions(),
  };
};

const getMongoString = (configService: ConfigService) => {
  if (process.env.NODE_ENV === 'production') {
    return (
      'mongodb://' +
      configService.get('MONGO_LOGIN_PRODUCTION') +
      ':' +
      configService.get('MONGO_PASSWORD_PRODUCTION') +
      '@' +
      configService.get('MONGO_HOST_PRODUCTION') +
      ':' +
      configService.get('MONGO_PORT') +
      '/' +
      configService.get('MONGO_AUTH_DB')
    );
  }

  return (
    'mongodb://' +
    configService.get('MONGO_LOGIN') +
    ':' +
    configService.get('MONGO_PASSWORD') +
    '@' +
    configService.get('MONGO_HOST') +
    ':' +
    configService.get('MONGO_PORT') +
    '/' +
    configService.get('MONGO_AUTH_DB')
  );
};

const getMongoOptions = () => ({
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
