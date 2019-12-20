import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setStreet } from './redux/actions.js';
import { setAddressCity } from './redux/thunks.js';
import style from './Address.module.css';
import { el } from './element.selectors.js';

const Address = () => {
  // selector example usage
  const address = useSelector(({ address }) => address);

  // dispatch simple usage example
  const dispatch = useDispatch();

  // internal Address state
  const [selected, setSelected] = useState();
  const [newAddress, setNewAddress] = useState();
  const [newCity, setNewCity] = useState();

  const updateStreet = () =>
    dispatch(
      setStreet({
        value: newAddress,
        index: selected,
      }),
    );

  const updateCities = () => dispatch(setAddressCity(newCity));

  return (
    <div className={style.Address}>
      <div className={style.addressList}>
        {Object.entries(address).map(([key, val]) => (
          <div className={style.addressItem} key={key}>
            <button
              className={`${style.key} ${el.btnSelectRow}`}
              onClick={() => {
                setSelected(key);
                setNewAddress(val.street);
              }}>
              {key}
            </button>
            <span className={style.value}>
              {val.city}, {val.street} - {val.number}
            </span>
          </div>
        ))}
        <div className={`${style.addressItem} ${style.input}`}>
          <span className={`${style.key} ${el.selectedRow}`}>
            {selected ? Object.keys(address).find(x => x === selected) : 'row'}
          </span>
          <input
            type="text"
            className={`${style.value} ${el.inputUpdateRow}`}
            value={newAddress}
            placeholder="update row street name"
            onChange={e => setNewAddress(e.target.value)}
          />
          <button
            className={`${style.key} ${el.btnUpdateRow}`}
            onClick={updateStreet}>
            submit
          </button>
        </div>
        <div className={`${style.addressItem} ${style.input}`}>
          <span className={style.key}>city</span>
          <input
            type="text"
            className={style.value}
            value={newCity}
            placeholder="Set new city for all address"
            onChange={e => setNewCity(e.target.value)}
          />
          <button className={style.key} onClick={updateCities}>
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export { Address };
