import * as c from '../Config/const';
import axios from "axios";

export async function getAllType(data) {
    try {
        console.log('request company type');
        const options = {
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                'Access-Control-Allow-Origin': '*'
            }
        };
        let res = await axios.get(c.GET_ALL_COMPANY_TYPE, options);
        return res.data;
    } catch (e) {
        throw handler(e);
    }
}

export async function getAllCompany() {
    try {
        console.log('request all company');
        const options = {
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                'Access-Control-Allow-Origin': '*'
            }
        };
        let res = await axios.get(c.GET_ALL_COMPANY, options);
        return res.data;
    } catch (e) {
        throw handler(e);
    }
}

export async function getAllCompanyByType(companyType) {
    try {
        console.log('request all company by type');
        const options = {
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                'Access-Control-Allow-Origin': '*'
            }
        };
        let res = await axios.get(c.GET_ALL_COMPANY_BY_TYPE + companyType, options);
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
