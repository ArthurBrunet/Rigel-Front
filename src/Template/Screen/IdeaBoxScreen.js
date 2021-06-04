import Apero from '../Component/apero';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export function IdeaBoxScreen() {
    return (
        <>
        <div className={'ideaForm'}>
            <form className={'ideaBox'} noValidate autoComplete="off">
                <TextField className="input" id="ideaFormName" label="Nom"/><br/>
                <TextField className="input" id="ideaFormName" label="Rédigez votre idée"/><br/>
                <Button className="ideaButton">Envoyer votre idée</Button>
            </form>
        </div>
        <Apero/>
        </>
        );
}
