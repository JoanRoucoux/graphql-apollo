const _ = require('lodash');
const { ApolloError } = require('apollo-server');

module.exports = {
  async speakers(session, args, { dataSources }, info) {
    try {
      const speakers = await dataSources.speakerAPI.getSpeakers();
      return speakers.filter((speaker) => {
        return _.filter(session.speakers, { id: speaker.id }).length > 0;
      });
    } catch (error) {
      return new ApolloError('Unable to get speakers', 'SPEAKERSAPIERROR', {
        token: 'uniqueToken',
      });
    }
  },
};
