import Apero from '../Component/apero';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Title from "../Component/Title";
import axios from "axios";
import * as c from "../../Config/const";
import {handler} from "../../Service/IdeaService";
import {useState} from "react";
import {useAuth} from "../../Store/Auth/auth";
export function IdeaBoxScreen() {

    let [title, setTitle] = useState(false);
    let [idea, setIdea] = useState(false);
    let auth = useAuth();
    let user = auth.state.user.email;

    const handleSubmit = async () => {
        try {
            console.log('request idea creation');
            const options = {
                headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                    'Access-Control-Allow-Origin': '*'
                }
            };
            if (title && idea && user) {
                let res = await axios.post(c.IDEA_CREATE, {
                    "title": title,
                    "idea": idea,
                    "user": user
                }, options);

                return res.data;
            }
            return false;
        } catch (e) {
            throw handler(e);
        }
    }

    return (
        <>
            <Title title={'Boîte à idées'}/>
            <div className={'ideaForm'}>
                <form className={'ideaBox'} noValidate autoComplete="off">
                    <TextField className="input" id="ideaFormTitle" label="TITRE"
                               onChange={(result) => {
                                   setTitle(result.target.value)
                               }}
                    /><br/>
                    <TextField className="input" id="ideaFormText" label="RÉDIGEZ VOTRE IDÉE ICI"
                               onChange={(result) => {
                                   setIdea(result.target.value)
                               }}
                    /><br/>
                    <Button className="ideaButton" onClick={() => {
                        handleSubmit().then(r => null)
                    }}>Envoyer votre idée</Button>
                </form>
            </div>
            <Apero/>
        </>
    );
}
