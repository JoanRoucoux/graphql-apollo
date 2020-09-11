import { gql } from '@apollo/client';

const GET_SESSIONS = gql`
  query sessionList {
    sessions {
      title
      id
      speakers {
        id
        name
      }
    }
  }
`;

const GET_SESSION_BY_ID = gql`
  query sessionById($sessionId: ID!) {
    sessionById(id: $sessionId) {
      ... on Session {
        title
        room
        format
        favorite
        startsAt
        endsAt
        description
      }
      ... on Error {
        code
        message
        token
      }
    }
  }
`;

const SessionQueries = {
  GET_SESSIONS,
  GET_SESSION_BY_ID,
};

export default SessionQueries;
