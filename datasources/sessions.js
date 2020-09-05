const sessions = require('../data/sessions.json');
const { DataSource } = require('apollo-datasource');
const _ = require('lodash');

class SessionAPI extends DataSource {
  getSessions = (args) => _.filter(sessions, args);

  getSessionById = (id) => _.filter(sessions, { id: parseInt(id) })[0];
}

module.exports = SessionAPI;
