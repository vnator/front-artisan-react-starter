import gql from 'graphql-tag';

const USER_FRAGMENTS = Object.freeze({
  USER_FIELDS: gql`
    fragment userFields on User {
      id
      name
      email
      dateOfBirth
      gender
    }
  `,
});

const USER = {
  GET_USER: gql`
    query User($id: ID) {
      user(id: $id) {
        ...userFields
      }
    }

    ${USER_FRAGMENTS.USER_FIELDS}
  `,
  GET_USER_LIST: gql`
    query Users($sortField: SortFieldUser, $skip: Int, $limit: Int) {
      users(sortField: $sortField, skip: $skip, limit: $limit) {
        ...userFields
      }
    }

    ${USER_FRAGMENTS.USER_FIELDS}
  `,
  UPSERT_USER: gql`
    mutation UpsertUser(
      $name: String
      $email: Email
      $dateOfBirth: Date
      $gender: Gender
    ) {
      upsertUser(
        name: $name
        email: $email
        dateOfBirth: $dateOfBirth
        gender: $gender
      ) {
        id
      }
    }
  `,
};

export { USER, USER_FRAGMENTS };
