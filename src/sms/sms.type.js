import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLEnumType, 
    GraphQLID, 
    GraphQLBoolean, 
    GraphQLFloat 
} from 'graphql/type';

export const SmsType = new GraphQLObjectType ({
    name: 'SmsType',
    description: 'SendChamp SMS object',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'SMS ID',
            resolve: (obj, args, context) => obj._id || obj.id
        },
        to: {
            type: GraphQLList(GraphQLString),
            description: 'SMS recipient',
        },
        senderName: {
            type: GraphQLString,
            description: 'Sender\'s name',
        },
        message: {
            type: GraphQLString,
            description: 'SMS body',
        }
    })
})
