# hackernews-node

The complete app can be found [here](https://github.com/namanmanchanda09/hackernews-react-apollo).

## Steps 

### Project Setup
1. Create a directory `mkdir hackernews-node`
2. `cd hackernews-node`
3. Initialise a project `yarn init -y`
4. `mkdir src`
5. Make the server file `touch src/index.js` 
6. Add graphql-yoga `yarn add graphql-yoga`
7. Make changes into `index.js`
8. Run the server using `node src/index.js`

### Put the schema in a separate file
1. Create the schema file `touch src/schema.graphql`
2. Remove the typeDefs from `index.js` & modify the resolver functions

### Add a Database
1. Create the Prisma directory `mkdir prisma`
2. Create the Prisma files `touch prisma/prisma.yml` & `touch prisma/datamodel.prisma`
3. Add the datamodel in `datamodel.prisma`
4. Install the Prisma CLI globally `yarn global add prisma`
5. Deploy the model from root folder `prisma deploy`
6. Select the appropriate options to setup Prisma
7. Inside the prisma folder run `prisma generate`

### Connecting Server and Database with Prisma Client
1. In root directory run `yarn add prisma-client-lib`

### Adding authentication
1. After the changes in `datamodel.prisma` redeploy the model using `prisma deploy` from root folder
2. Make the changes in schema
3. Create the resolver function
4. Run `yarn add jsonwebtoken bcryptjs`
5. Create `src/utils.js`
6. Make the necessary changes in `index.js`

### Subscriptions
1. Add the subscriptions in the schema
2. Update the resolvers
3. Update `index.js`
4. Listen to subscriptions on `http://localhost:4000` and make mutations through another `https://localhost:4000`

### Filtering, Pagination and Sorting
1. Change the schema and the appropriate resolvers





