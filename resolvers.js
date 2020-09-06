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
};
