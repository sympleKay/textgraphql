import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLEnumType, 
    GraphQLID, 
    GraphQLBoolean, 
    GraphQLFloat 
} from 'graphql/type';

export const UserType = new GraphQLObjectType ({
    name: 'UserType',
    description: 'SendChamp Login object',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'User ID',
            resolve: (obj, args, context) => obj._id || obj.id
        },
        username: {
            type: GraphQLString,
            description: 'User unique username',
        },
        email: {
            type: GraphQLString,
            description: 'User email address',
        },
        phoneNumber: {
            type: GraphQLString,
            description: 'User Phone Number',
        },
        accessToken: {
            type: GraphQLString,
            description: 'Access token',
        },
        apikey: {
            type: GraphQLString,
            description: 'API key',
        }
    })
})
