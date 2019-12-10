import React, { useState  } from 'react';
import { useIntl } from 'react-intl';
import { useSelector, useStore,  useDispatch  } from 'react-redux';

import { setCounter, setAddress  } from './redux/actions.js';
import style from './App.module.css';

import logo from '../../img/vnator.svg';

const App = () => {
  const { formatMessage } = useIntl();

  // selector example usage
  const counter = useSelector(state => state.app.counter);
  const address = useSelector(({ app }) => app.address);

  // dispatch simple usage example
  const dispatch = useDispatch();

  // internal App state
  const [selected, setSelected] = useState();
  const [newAddress, setNewAddress] = useState();

  const updateStreet = () => dispatch(
    setAddress({
      value: {
        ...address[selected],
        street: newAddress
      },
      index: selected
    })
  )

  return (
    <div className={style.App}>
      <header className={style.header}>
        <img src={logo} className={style.logo} alt="logo" />
        <h1 className={style.title}>
          {formatMessage({
            id: 'app.title',
          })}
        </h1>

        <div className={style.counter}>
          <button
            className={style.counterEvent}
            onClick={() => dispatch(setCounter(counter - 1))}
            >
              -
          </button>
          <strong className={style.counterLabel} >{counter}</strong>
          <button
            className={style.counterEvent}
            onClick={() => dispatch(setCounter(counter + 1))}
          >
            +
          </button>
        </div>
        
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
              code: str => <code key={str} className={style.code}>{str}</code>,
            },
          )}
        </p>
      </header>
      <div className={style.addressList}>
        {Object.entries(address).map(([key, val]) => 
          <div className={style.address} key={key}>
            <button
              className={style.key}
              onClick={() => {
                setSelected(key)
                setNewAddress(val.street) 
              }}>
                {key}
            </button>
            <span className={style.value}>
              {val.city}, {val.street} - {val.number}
            </span>
          </div>
        )}
        <div className={`${style.address} ${style.input}`} key="input-row">
          <span className={style.key}>
            {selected ? Object.keys(address).find(x => x === selected) : 'row'}
          </span>         
          <input
            class={style.value}
            value={newAddress}
            placeholder="update row street name"
            onChange={e => setNewAddress(e.target.value)}
          />
          <button
            className={style.key}
            onClick={updateStreet}>
            submit
          </button>
        </div>
      </div>  
    </div>
  );
};

export { App };

