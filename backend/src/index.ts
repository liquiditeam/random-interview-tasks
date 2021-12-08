// https://typegraphql.com/docs/installation.html
// https://jawj.github.io/zapatos/

import "reflect-metadata";
import { Arg, Args, buildSchema, Field, ID, ArgsType, ObjectType, Query, Resolver } from "type-graphql";
import * as db from 'zapatos/db'
import { ApolloServer, gql } from 'apollo-server';

@ObjectType()
class Dog {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;
}

@ArgsType()
class DogsArgs {
  skip: number;
  take: number;
}

@Resolver(Dog)
class DogResolver {

  @Query(returns => Dog)
  async dog(@Arg("id") id: number) : Promise<Dog> {
    return await db.selectExactlyOne('dogs', { id }).run(pool);
  }

  @Query(returns => [Dog])
  dogs(@Args() { skip, take }: DogsArgs) : Promise<Dog[]> {
    return await db.select('dogs',{}).run(pool);
  }
}

const main = async () => {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [DogResolver],
    }),
  });

  await server.listen(3000);
}

main();