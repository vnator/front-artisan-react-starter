import { ERROR } from '../../const/errors';

const { TYPE, CODE } = ERROR;

const app_ptBR = {
  paragraph:
    'Edite <code>src/modules/App/App.js</code> e salve para recarregar. <extern>Aprenda React</extern>',
  menu: {
    counter: 'counter',
    address: 'address',
    users: 'users',
  },
  error: {
    [TYPE.INPUT]: {
      [CODE.A01]: `${TYPE.INPUT}-${CODE.A01}: Type a valid e-mail`,
    },
    [TYPE.AUTH]: {
      [CODE.A01]: `${TYPE.AUTH}-${CODE.A01}: User not authenticated`,
    },
    [TYPE.CRASH]: {
      [CODE.A01]: `${TYPE.CRASH}-${CODE.A01}: Invalid street name`,
    },
    [TYPE.FETCH]: {
      [CODE.A01]: `${TYPE.FETCH}-${CODE.A02}: User with {user} don't found`,
      [CODE.A02]: `${TYPE.FETCH}-${CODE.A02}: User with {user} don't found`,
      [CODE.A03]: `${TYPE.FETCH}-${CODE.A03}: User {user} don't registred`,
    },
  },
};

export { app_ptBR };
