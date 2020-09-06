const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    sessions(
      id: ID
      title: String
      description: String
      startsAt: String
      endsAt: String
      room: String
      day: String
      format: String
      track: String
      level: String
    ): [Session]
    sessionById(id: ID!): Session
    speakers: [Speaker]
    speakerById(id: ID!): Speaker
  }
  type Session {
    id: ID!
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String @deprecated(reason: "Here is the message")
    level: String
    speakers: [Speaker]
  }
  type Speaker {
    id: ID!
    bio: String
    sessions: [Session]
    name: String
  }
`;
