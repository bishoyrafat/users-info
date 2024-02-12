import { AppComponent } from './app.component';

describe('app component', () => {
  let comp: AppComponent;

  beforeEach(function () {
    comp = new AppComponent();
  });

  it('shoud haver users-info', () => {
    expect(comp.title).toBe('users-info');
  });
});
