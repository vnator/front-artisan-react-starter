import { app_ptBR } from './modules/App/intl.ptBR.js';

// en-US
import { app_enUS } from './modules/App/intl.enUS.js';
import { header_enUS } from './modules/Header/intl.enUS.js';
import { header_ptBR } from './modules/Header/intl.ptBR.js';
import { users_enUS } from './pages/Users/intl.enUS.js';
import { users_ptBR } from './pages/Users/intl.ptBR.js';

const messages = Object.freeze({
  'en-US': {
    app: app_enUS,
    header: header_enUS,
    users: users_enUS,
  },
  'pt-BR': {
    app: app_ptBR,
    header: header_ptBR,
    users: users_ptBR,
  },
});

export { messages };
