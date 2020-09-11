import { gql } from '@apollo/client';

const TOGGLE_FAVORITE_SESSION = gql`
  mutation toggleFavoriteSession($sessionId: ID!) {
    toggleFavoriteSession(id: $sessionId) {
      title
      favorite
    }
  }
`;

const SessionMutations = { TOGGLE_FAVORITE_SESSION };

export default SessionMutations;
