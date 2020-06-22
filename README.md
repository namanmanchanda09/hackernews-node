# hackernews-node

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

### Adding authentication
1. After the changes in `datamodel.prisma` redeploy the model using `prisma deploy` from root folder
2. Make the changes in schema
3. Create the resolver function
4. Run `yarn add jsonwebtoken bcryptjs`
5. Create `src/utils.js`
6. Make the necessary changes in `index.js`




