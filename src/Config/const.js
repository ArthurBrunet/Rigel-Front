
const BASE_URL = "http://localhost:8000";

export const LOGIN = BASE_URL+"/api/login_check";


export const IDEA_CREATE = BASE_URL+"/api/idea/create";

export const GETALL_POST = BASE_URL+"/posts";

export const GET_ALL_COMPANY_TYPE = BASE_URL+"/api/typeCompany/get";

export const GET_ALL_COMPANY = BASE_URL+"/api/company/get/asc";

export const GET_ALL_COMPANY_BY_TYPE = BASE_URL+"/api/company/get/Type/";

export const INFORMATION_PROFILE = (email) => {
    return BASE_URL+"/user/get/"+email;
}

export const GET_MESSAGE_FOR_CANAL = (id) => {
    return BASE_URL+"/api/message/get/"+id;
}

export const CREATE_APERITIF = BASE_URL+"/notification/aperitif";

export const CREATE_MESSAGE_FOR_CANAL = BASE_URL+"/api/message/create";

export const CREATE_USER = BASE_URL+"/mail/createUser";
