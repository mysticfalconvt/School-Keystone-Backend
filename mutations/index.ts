import { graphQLSchemaExtension } from '@keystone-next/keystone/schema';
// import addToCart from './addToCart'
// import checkout from './checkout'
import recalculatePBIS from './recalculatePBIS'
import recalculateCallback from './recalculateCallback'
import updateStudentSchedules from './updateStudentSchedules'

// make a fake gql tagged template Literal
const graphql = String.raw;

export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: graphql`
    type Mutation {
      recalculateCallback(callbackID: ID): User
      recalculatePBIS(userId: ID): User
      updateStudentSchedules(studentScheduleData: String): User
    }
  `,
  resolvers: {
    Mutation: {
      recalculateCallback,
      recalculatePBIS,
      updateStudentSchedules,
    },
  },
});
