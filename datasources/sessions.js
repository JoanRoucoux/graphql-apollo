const sessions = require('../data/sessions.json');
const { DataSource } = require('apollo-datasource');
const _ = require('lodash');

class SessionAPI extends DataSource {
  getSessions = (args) => _.filter(sessions, args);

  getSessionById = (id) => _.filter(sessions, { id: parseInt(id) })[0];

  toggleFavoriteSession = (id) => {
    const session = _.filter(sessions, { id: parseInt(id) })[0];
    session.favorite = !session.favorite;
    return session;
  };

  addSession = (session) => {
    session.id = 12;
    sessions.push(session);
    return session;
  };
}

module.exports = SessionAPI;
