import { setCounter } from './actions';

const setCounterOneByOne = () => (dispatch, getState) => {
  let { counter } = getState();

  dispatch(setCounter(counter + 1));

  for (let i = 1; i < 10; i++) {
    setTimeout(() => {
      let { counter } = getState();
      dispatch(setCounter(counter + 1));
    }, Number(`${i}000`));
  }
};

export { setCounterOneByOne };
