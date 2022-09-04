import browserHistory from './browser-history';

it('should create instance of BrowserHistory', () => {
  const history = browserHistory;
  expect(history).toBeDefined();
  expect(typeof history).toBe('object');
});
