import { GraphQLID, GraphQLString, GraphQLNonNull, GraphQLList, GraphQLInt, GraphQLInputObjectType, GraphQLFloat } from 'graphql/type';

import { sendSMS, getAllUserSMS } from './sms.service';
import { SmsType } from './sms.type'

export const SendSMSMutation = {
    type: GraphQLString,
    args: {
        to: { type: GraphQLNonNull(GraphQLList(GraphQLString)) },
        sender: { type: GraphQLNonNull(GraphQLString) },
        body: { type: GraphQLNonNull(GraphQLString) },
        apikey: { type: GraphQLNonNull(GraphQLString)}
    },
    resolve: (root, args, context) => sendSMS(args, context)
}

export const GetAllUserMsg = {
    type: GraphQLList(SmsType),
    resolve: (root, args, context) => getAllUserSMS(args, context)
}