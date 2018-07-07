import { RouteConfigModule } from './route-config.module';

describe('RouteConfigModule', () => {
  let routeConfigModule: RouteConfigModule;

  beforeEach(() => {
    routeConfigModule = new RouteConfigModule();
  });

  it('should create an instance', () => {
    expect(routeConfigModule).toBeTruthy();
  });
});
