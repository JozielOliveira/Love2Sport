import { UserCadastroModule } from './user-cadastro.module';

describe('UserCadastroModule', () => {
  let userCadastroModule: UserCadastroModule;

  beforeEach(() => {
    userCadastroModule = new UserCadastroModule();
  });

  it('should create an instance', () => {
    expect(userCadastroModule).toBeTruthy();
  });
});
