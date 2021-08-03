import { client } from '../utils/client'
import { AUTH_API } from '../utils/constants';

export const signUp = async (args, context) => {
    const res = await client(context.token)
        .post(`${AUTH_API}/user/signup`, { args });
    return res?.data;
}

export const allUsers = async (args, context) => {
    // const res = await client(context.token)
    //     .post(`${AUTH_API}/user/signup`, { ...args });
    // return res.data;
    return `Working on all users!!!`
}

export const login =  async (args, context) => {
    const res = await client(context.token).post(`${AUTH_API}/user/login`, { args });
    return res?.data;
}

export const currentUser =  async (args, context) => {
    const res = await client(context.token).get(`${AUTH_API}/user/loggeduser`);
    return res?.data;
}