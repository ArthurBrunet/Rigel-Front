import User from "./UserModel";
import UrgenceApero from "./UrgenceAperoModel";

export default class ResponseAperoModel {
    id: String
    user: User
    urgenceApero: UrgenceApero
    response: String
    createdAt: Date
    updateAt: Date
}
