# graphql-apollo

Full-stack, GraphQL-powered app with the Apollo platform 🚀.<br/>
Started from Pluralsight course "Building a GraphQL API with Apollo Server".

## File structure

The app is split out into two folders:

- `client`: Application frontend, which uses Apollo Client to communicate with the GraphQL server
- `server`: Server side of the application, GraphQL API based on REST API and mock data

## Example

Some examples of queries and mutations

```
query {
  sessionById(id: "84473") {
    ... on Session {
      title
      description
      favorite
      id
      track
      speakers {
        name
      }
    }
    ... on Error {
      code
      message
      token
    }
  }
  sessions(room: EUROPA) {
    title
    id
    track
    speakers {
      name
    }
  }
  speakers {
    name
  }
}
```

```
mutation {
  toggleFavoriteSession(id: "84473") {
    title
    favorite
  }
}
```

```
mutation {
  addNewSession(
    session: {
      title: "new session"
      description: "This is an awesome description"
    }
  ) {
    title
    description
  }
}
```

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
