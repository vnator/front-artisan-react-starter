import React from 'react';
import Enzyme from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/react-testing';
import Adapter from 'enzyme-adapter-react-16';

import { UserList } from '../UserList';
import { mountWithIntl } from '../../../utils/enzymeHelper';
import { USER } from '../../../queries/user';

Enzyme.configure({ adapter: new Adapter() });

describe('UserList', () => {
  const mocks = [
    {
      request: {
        query: USER.GET_USER_LIST,
        variables: {
          sortField: '',
          skip: 0,
          limit: 10,
        },
      },
      result: {
        data: {
          users: [
            {
              id: 1,
              name: 'joao',
              email: 'joao@gmail.com',
              gender: 'MALE',
              dateOfBirth: '2011-02-02',
            },
            {
              id: 2,
              name: 'henrique',
              email: 'henrique@gmail.com',
              gender: 'MALE',
              dateOfBirth: '2000-02-02',
            },
            {
              id: 1,
              name: 'ana',
              email: 'ana@gmail.com',
              gender: 'FEMALE',
              dateOfBirth: '1997-02-02',
            },
          ],
        },
      },
    },
  ];

  it('Snapshot', () => {
    const userList = mountWithIntl(
      <MemoryRouter>
        <MockedProvider mocks={mocks}>
          <UserList />
        </MockedProvider>
      </MemoryRouter>,
    );

    expect(userList).toMatchSnapshot();
  });
});
