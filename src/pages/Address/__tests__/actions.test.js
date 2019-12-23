import { address } from '../redux/types';
import { setCity, setStreet, setNumber } from '../redux/actions';

describe('Address Action', () => {
  it('setStreet', () => {
    const newCity = 'Itu';
    const index = 'first';

    const result = setCity({ value: newCity, index });
    expect(result).toEqual({
      type: address.SET_CITY,
      payload: { value: newCity, index: [index, 'city'] },
    });
  });

  it('setNumber', () => {
    const newNumber = 'Itu';
    const index = 'first';

    const result = setNumber({ value: newNumber, index });
    expect(result).toEqual({
      type: address.SET_NUMBER,
      payload: { value: newNumber, index: [index, 'number'] },
    });
  });

  it('setCity', () => {
    const newStreet = 'Itu';
    const index = 'first';

    const result = setStreet({ value: newStreet, index });
    expect(result).toEqual({
      type: address.SET_STREET,
      payload: { value: newStreet, index: [index, 'street'] },
    });
  });
});
