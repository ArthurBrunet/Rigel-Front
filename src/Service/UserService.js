import * as c from '../Config/const';
import axios from "axios";

export async function login(data){
    try{
        const options = {
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            }
        };
        let res = await axios.post(c.LOGIN, data, options);

        return res.data;
    }catch (e) {
        throw handler(e);
    }
}

export async function information(email){
    try{
        const options = {
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            }
        };
        let res = await axios.get(c.INFORMATION_PROFILE(email),options);
        return res.data;
    }catch (e) {
        throw handler(e);
    }
}

export function handler(err) {
    let error = err;
    if (err.response && err.response.data.hasOwnProperty("message"))
        error = err.response.data;
    else if (!err.hasOwnProperty("message")) error = err.toJSON();

    return new Error(error.message);
}
