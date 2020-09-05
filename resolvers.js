module.exports = {
  Query: {
    sessions: (parent, args, { dataSources }, info) =>
      dataSources.sessionAPI.getSessions(args),
    sessionById: (parent, { id }, { dataSources }, info) =>
      dataSources.sessionAPI.getSessionById(id),
  },
};
