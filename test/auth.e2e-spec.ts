import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { disconnect } from 'mongoose';
import { AuthDto } from 'src/auth/dto/auth.dto';

const authDto: AuthDto = {
  login: 'her4@tebe.com',
  password: 'sdfsdfsdf',
};

describe('AuthController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/auth/login (POST) - success', async () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send(authDto)
      .expect(200)
      .then(({ body }: request.Response) => {
        expect(body.accesToken).toBeDefined();
      });
  });

  it('/auth/login (POST) - fail', async () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ ...authDto, password: '2' })
      .expect(401, {
        statusCode: 401,
        message: "Password does'n match",
        error: 'Unauthorized',
      });
  });

  it('/auth/login (POST) - fail', async () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ ...authDto, login: '2d@r.ru' })
      .expect(401, {
        statusCode: 401,
        message: "User with this mail doesn't exissts",
        error: 'Unauthorized',
      });
  });

  afterAll(() => {
    disconnect();
  });
});
