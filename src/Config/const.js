
const BASE_URL = "http://localhost:8000";

export const LOGIN = BASE_URL+"/api/login_check";


export const IDEA_CREATE = BASE_URL+"/api/idea/create";

export const GETALL_POST = BASE_URL+"/posts";

export const INFORMATION_PROFILE = (email) => {
    return BASE_URL+"/user/get/"+email;
}
