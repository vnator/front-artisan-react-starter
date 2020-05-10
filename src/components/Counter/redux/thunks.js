import { setCounter } from './actions';

const _REPET = 10;
const _TIMER = (n) => `${n}000`;

const setCounterOneByOne = () => (dispatch, getState) => {
  let { counter } = getState();

  dispatch(setCounter(counter + 1));

  for (let i = 1; i < _REPET; i++) {
    setTimeout(() => {
      let { counter } = getState();
      dispatch(setCounter(counter + 1));
    }, Number(_TIMER(i)));
  }
};

export { setCounterOneByOne };
