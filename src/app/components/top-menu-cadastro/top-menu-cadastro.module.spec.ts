import { TopMenuCadastroModule } from './top-menu-cadastro.module';

describe('TopMenuCadastroModule', () => {
  let topMenuCadastroModule: TopMenuCadastroModule;

  beforeEach(() => {
    topMenuCadastroModule = new TopMenuCadastroModule();
  });

  it('should create an instance', () => {
    expect(topMenuCadastroModule).toBeTruthy();
  });
});
