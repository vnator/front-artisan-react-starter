import { setCity } from './actions';

const setAddressCity = (value) => (dispatch, getState) => {
  const { address } = getState();

  for (let index of Object.keys(address)) {
    dispatch(setCity({ value, index }));
  }
};

export { setAddressCity };
