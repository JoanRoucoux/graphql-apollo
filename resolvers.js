const Query = require('./resolvers/query');
const Mutation = require('./resolvers/mutation');
const Session = require('./resolvers/session');

module.exports = {
  Query,
  Mutation,
  Session,
  Room: {
    EUROPA: 'Europa',
    SOL: 'Sol',
    SATURN: 'Saturn',
  },
  SessionOrError: {
    __resolveType(object) {
      return object.code ? 'Error' : 'Session';
    },
  },
};
