import { GraphQLID, GraphQLString, GraphQLNonNull, GraphQLList, GraphQLInt, GraphQLInputObjectType, GraphQLFloat } from 'graphql/type';

import { signUp, allUsers, login, currentUser } from './user.service';
import { UserType } from './user.type'

export const SignUpMutation = {
    type: GraphQLString,
    args: {
      username: { type: GraphQLNonNull(GraphQLString) },
      email: { type: GraphQLNonNull(GraphQLString) },
      password: { type: GraphQLNonNull(GraphQLString) },
      phoneNumber: { type: GraphQLNonNull(GraphQLString) }
    },
    resolve: (root, args, context) => signUp(args, context)
};

export const AllUsers = {
    type: GraphQLString,
    resolve: (root, args, context) => allUsers(args, context)
}

export const LoginMutation = {
    type: UserType,
    args: {
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: (root, args, context) => login(args, context)
}

export const CurrentUser = {
    type: UserType,
    resolve: (root, args, context) => currentUser(args, context)
}