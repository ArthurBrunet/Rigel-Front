import User from "./UserModel";

export default class UrgenceApero {
    id: String
    date: Date
    motif: String
    type: String
    createdBy: User
    createdAt: Date
    updateAt: Date
}
