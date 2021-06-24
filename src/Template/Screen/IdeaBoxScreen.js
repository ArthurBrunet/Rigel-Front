import Apero from '../Component/apero';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Title from "../Component/Title";

export function IdeaBoxScreen() {
    return (
        <>
            <Title title={'Boîte à idées'}/>
            <div className={'ideaForm'}>
                <form className={'ideaBox'} noValidate autoComplete="off">
                    <TextField className="input" id="ideaFormTitle" label="TITRE"/><br/>
                    <TextField className="input" id="ideaFormText" label="RÉDIGEZ VOTRE IDÉE ICI"/><br/>
                    <Button className="ideaButton">Envoyer votre idée</Button>
                </form>
            </div>
            <Apero/>
        </>
    );
}
