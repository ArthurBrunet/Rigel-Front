import * as c from '../Config/const';
import axios from "axios";

export async function create(data) {
    try {
        console.log('request idea creation');
        const options = {
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                'Access-Control-Allow-Origin': '*'
            }
        };
        let res = await axios.post(c.IDEA_CREATE, data, options);

        return res.data;
    } catch (e) {
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
