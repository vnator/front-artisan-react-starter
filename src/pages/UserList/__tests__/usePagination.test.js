import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { usePagination } from '../usePagination';
import Adapter from 'enzyme-adapter-react-16';
import { SORT_FIELD } from '../../../const/userListParams';

Enzyme.configure({ adapter: new Adapter() });

describe('usePagination', () => {
  let pag, prevPage, nextPage, orderBy;
  const TestHook = ({ callback }) => {
    callback();
    return null;
  };

  beforeEach(() => {
    shallow(
      <TestHook
        callback={() => {
          [pag, { prevPage, nextPage, orderBy }] = usePagination(
            SORT_FIELD.NAME,
          );
        }}
      />,
    );
  });

  it('default value', () => {
    expect(pag).toEqual({
      page: 1,
      params: {
        skip: 0,
        sortField: SORT_FIELD.NAME,
        limit: 4, //default value
      },
    });
  });

  it('prevPage when page are 1', () => {
    prevPage();

    expect(pag.page).toBe(1);
    expect(pag.params.skip).toBe(0);
  });

  it('nextPage', () => {
    nextPage();
    expect(pag.page).toBe(2);
    expect(pag.params.skip).toBe(4);
  });

  it('prevPage when page are 2 or more', () => {
    nextPage();
    nextPage();

    prevPage();

    expect(pag.page).toBe(2);
    expect(pag.params.skip).toBe(4);
  });

  it('orderBy', () => {
    orderBy(SORT_FIELD.EMAIL);

    expect(pag.params.sortField).toBe(SORT_FIELD.EMAIL);
  });
});
