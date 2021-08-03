import { client } from '../utils/client'
import { AUTH_API } from '../utils/constants';

export const sendSMS = async (args, context) => {
    const res = await client(context.token)
        .post(`${AUTH_API}/sms/send`, { args });
    return res?.data;
}

export const getAllUserSMS = async (args, context) => {
    const currentUser = await client(context.token).get(`${AUTH_API}/user/loggeduser`);
    const res = await client(context.token).get(`${AUTH_API}/sms/getsms/${currentUser.data._id}`);
    return res?.data;
}