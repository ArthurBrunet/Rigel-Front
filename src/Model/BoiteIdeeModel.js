import User from "./UserModel";

export default class BoiteIdee {
    id: String
    titre: String
    description: String
    user: User
    createdAt: Date
    updateAt: Date
}
