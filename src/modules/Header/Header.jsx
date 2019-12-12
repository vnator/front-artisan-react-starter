import React from 'react';
import { useIntl } from 'react-intl';

import style from './Header.module.css';
import logo from '../../img/vnator.svg';

const Header = () => {
  const { formatMessage } = useIntl();

  return (
    <header className={style.Header}>
      <img
        src={logo}
        className={style.logo}
        alt={formatMessage({
          id: 'header.logoAlt',
        })}
      />
      <h1 className={style.title}>
        {formatMessage({
          id: 'header.title',
        })}
      </h1>
    </header>
  );
};

export { Header };
