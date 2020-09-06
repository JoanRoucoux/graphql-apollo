# graphql-apollo
Building a GraphQL API with Apollo Server (Pluralsight course)

```javascript
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

```javascript
mutation {
  toggleFavoriteSession(id: "84473") {
    title
    favorite
  }
}
```

```javascript
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
