import Competence from "./CompetenceModel";
import Entreprise from "./EntrepriseModel";

export default class User {
    id: String
    nom: String
    prenom: String
    mail: String
    password : String
    avatar: String
    brevage: String
    token: String
    role: String
    entreprise: Entreprise
    competence: Competence
    isEnable: Boolean
    isVisible: Boolean
    createdAt: Date
    updateAt: Date
}
