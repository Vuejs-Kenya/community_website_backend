import { Test } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userService = await moduleRef.get<UserService>(UserService);
    userController = await moduleRef.get<UserController>(UserController);
  });

  // describe('findAll', () => {
  //   it('should return an array of users', async () => {
  //     const result = ['test'];
  //     jest.spyOn(userService, 'getUsers').mockImplementation(() => result);
  //
  //     expect(await userController.findAll()).toBe(result);
  //   })
  // });
});
