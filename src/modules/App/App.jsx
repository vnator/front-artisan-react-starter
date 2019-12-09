import React from 'react';
import { useIntl } from 'react-intl';
import style from './App.module.css';

import logo from '../../img/vnator.svg';

const App = () => {
  const { formatMessage } = useIntl();

  return (
    <div className={style.App}>
      <header className={style.header}>
        <img src={logo} className={style.logo} alt="logo" />
        <h1 className={style.title}>
          {formatMessage({
            id: 'app.title',
          })}
        </h1>
        <p className={style.paragraph}>
          {formatMessage(
            {
              id: 'app.paragraph',
            },
            {
              extern: str => (
                <a
                  className={style.link}
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer">
                  {str}
                </a>
              ),
              code: str => <code className={style.code}>{str}</code>,
            },
          )}
        </p>
      </header>
    </div>
  );
};

export { App };
