import gql from 'graphql-tag';

export const FETCH_MAILS_QUERY = gql`
  {
    getMails {
     id
     to
     subject
     message
  }
  }
`;