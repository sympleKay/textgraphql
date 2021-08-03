import { GraphQLObjectType, GraphQLSchema } from 'graphql/type';
import { 
    SignUpMutation, 
    AllUsers,
    LoginMutation,
    CurrentUser
} from './user';

import { 
  SendSMSMutation,
  GetAllUserMsg 
} from './sms'

const query = new GraphQLObjectType({
    name: 'QueryType',
    fields: {
      AllUsers,
      CurrentUser,
      GetAllUserMsg
    },
});

const mutation = new GraphQLObjectType({
    name: 'Mutations',
    fields: {
      SignUpMutation,
      LoginMutation,
      SendSMSMutation
    },
});
  
export default new GraphQLSchema({
  query,
  mutation
});