const TYPE = Object.freeze({
  INPUT: 'INPUT', // errors of input user data
  AUTH: 'AUTH', // erros of authentication users
  CRASH: 'CRASH', // comomn exceptions
  FETCH: 'FETCH', // fetch exceptions
});

const CODE = Object.freeze({
  // error pattern with first char is alphabetic and two next is numeric order
  A01: 'A01',
  A02: 'A02',
  A03: 'A03',
});

const ERROR = Object.freeze({
  TYPE,
  CODE,
});

export { ERROR };
