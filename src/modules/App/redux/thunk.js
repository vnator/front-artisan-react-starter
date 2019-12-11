import { setAddress, setCounter } from './actions';

const setCounterOneByOne = () => (dispatch, getState) => {
  let counter = getState().app.counter;

  dispatch(setCounter(counter + 1));

  for (let i = 1; i < 10; i++) {
    setTimeout(() => {
      let counter = getState().app.counter;
      dispatch(setCounter(counter + 1));
    }, Number(`${i}000`));
  }
};

const setAddressCity = city => (dispatch, getState) => {
  const { address } = getState().app;

  for (let index of Object.keys(address)) {
    const value = {
      ...address[index],
      city,
    };

    dispatch(setAddress({ value, index }));
  }
};

export { setCounterOneByOne, setAddressCity };
