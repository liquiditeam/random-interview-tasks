Important: This is in a broken state at the moment

- Make sure we are actually connecting to a database on startup and provide the pool to the db queries
- Harmonize the types in the DB and GQL, especially the ID: Either use UUID for the DB or transform on the fly
- Getting the two resolvers to run (list dogs, get info on a dog by id)
- Add two mutations: createDog and deleteDog to create a new dog in the table and to delete a dog
- Create list, create and delete query in the frontend (*.gql or *.graphql files) and use graphql-code-generator (https://www.graphql-code-generator.com/) to generate a React hook
- Use the two hooks in order to receive the current list of dogs, allow deletion and creation of a new dog by providing a name
