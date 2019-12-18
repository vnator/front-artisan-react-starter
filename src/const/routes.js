const ROUTER_PARAMS = Object.freeze({
  USER_ID: 'USER_ID',
});

const MAIN_ROUTES = Object.freeze({
  MAIN: '/',
  ADDRESS: '/address',
  USER_LIST: '/user-list',
  USER: (id = `:${ROUTER_PARAMS.USER_ID}`) => `/user/${id}`,
});

export { MAIN_ROUTES, ROUTER_PARAMS };
