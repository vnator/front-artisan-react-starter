import React, { Component } from 'react';
import Type from 'prop-types';
import style from './Address.module.css';
import { el } from './element.selectors.js';
import { intlShape } from '../../utils/intlShape';

class Address extends Component {
  // selector example usage
  state = {
    selected: '',
    newAddress: '',
    newCity: '',
  };

  updateStreet = () =>
    this.props.setStreet({
      value: this.state.newAddress,
      index: this.state.selected,
    });

  render() {
    const { formatMessage } = this.props.intl;

    return (
      <div className={style.Address}>
        <div className={style.addressList}>
          {Object.entries(this.props.address).map(([key, val]) => (
            <div className={style.addressItem} key={key}>
              <button
                className={`${style.key} ${el.btnSelectStreet}`}
                onClick={() => {
                  this.setState((prev) => ({
                    ...prev,
                    selected: key,
                    newAddress: val.street,
                  }));
                }}>
                {key}
              </button>
              <span className={style.value}>
                {val.city}, {val.street} - {val.number}
              </span>
            </div>
          ))}
          <div className={`${style.addressItem} ${style.input}`}>
            <span className={`${style.key} ${el.selectedStreet}`}>
              {this.state.selected
                ? Object.keys(this.props.address).find(
                    (x) => x === this.state.selected,
                  )
                : formatMessage({ id: 'address.street' })}
            </span>
            <input
              type="text"
              className={`${style.value} ${el.inputUpdateStreet}`}
              value={this.state.newAddress}
              placeholder={formatMessage({ id: 'address.placeholder.street' })}
              onChange={(e) => this.setState({ newAddress: e.target.value })}
            />
            <button
              className={`${style.key} ${el.btnUpdateStreet}`}
              onClick={this.updateStreet}>
              {formatMessage({ id: 'address.submit' })}
            </button>
          </div>
          <div className={`${style.addressItem} ${style.input}`}>
            <span className={style.key}>
              {formatMessage({ id: 'address.city' })}
            </span>
            <input
              type="text"
              className={`${style.value} ${el.inputUpdateCity}`}
              value={this.state.newCity}
              placeholder={formatMessage({ id: 'address.placeholder.city' })}
              onChange={(e) => this.setState({ newCity: e.target.value })}
            />
            <button
              className={`${style.key} ${el.btnUpdateCity}`}
              onClick={() => this.props.setAddressCity(this.state.newCity)}>
              {formatMessage({ id: 'address.submit' })}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Address.propTypes = {
  intl: Type.shape(intlShape).isRequired,
  setStreet: Type.func.isRequired,
  setAddressCity: Type.func.isRequired,
  address: Type.objectOf(
    Type.shape({
      city: Type.string,
      street: Type.string,
      number: Type.string,
    }),
  ).isRequired,
};

export { Address };
