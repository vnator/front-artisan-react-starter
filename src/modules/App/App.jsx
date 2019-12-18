import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useIntl } from 'react-intl';

import style from './App.module.css';

import { Counter } from '../../components/Counter/Counter';
import { Address } from '../../pages/Address/Address';
import { Header } from '../Header/Header';
import { MAIN_ROUTES } from '../../const/routes';
import { UserList } from '../../pages/UserList/UserList';
import { User } from '../../pages/User/User';

const App = () => {
  const { formatMessage } = useIntl();

  return (
    <div className={style.App}>
      <Header />
      <p className={style.paragraph}>
        {formatMessage(
          {
            id: 'app.paragraph',
          },
          {
            extern: str => (
              <a
                key={str}
                className={style.link}
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer">
                {str}
              </a>
            ),
            code: str => (
              <code key={str} className={style.code}>
                {str}
              </code>
            ),
          },
        )}
      </p>
      <Router>
        <ul className={style.nav}>
          <li className={style.opt}>
            <Link to={MAIN_ROUTES.MAIN}>
              {formatMessage({
                id: 'app.menu.counter',
              })}
            </Link>
          </li>
          <li className={style.opt}>
            <Link to={MAIN_ROUTES.ADDRESS}>
              {formatMessage({
                id: 'app.menu.address',
              })}
            </Link>
          </li>
          <li className={style.opt}>
            <Link to={MAIN_ROUTES.USER_LIST}>
              {formatMessage({
                id: 'app.menu.users',
              })}
            </Link>
          </li>
        </ul>
        <Switch>
          <Route exact path={MAIN_ROUTES.MAIN}>
            <Counter />
          </Route>
          <Route path={MAIN_ROUTES.ADDRESS}>
            <Address />
          </Route>
          <Route path={MAIN_ROUTES.USER_LIST}>
            <UserList />
          </Route>
          <Route path={MAIN_ROUTES.USER()}>
            <User />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export { App };
