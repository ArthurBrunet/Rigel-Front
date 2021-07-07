import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import {ParticlesBackground} from './ParticlesBackground';
import Button from '@material-ui/core/Button';
import {useAuth} from "../../Store/Auth/auth";
import {Redirect} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root: {},
    textField: {
        margin: theme.spacing(1),
        width: '100%',
    },
    button: {
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center'
    },
    buttonProps: {
        color: 'white',
        borderColor: 'white',
        borderRadius: '30px'
    }
}));


export function LoginScreen() {
    const classes = useStyles();
    let auth = useAuth();
    let [username, setUsername] = useState({});
    let [password, setPassword] = useState({});
    let [redirect, setRedirect] = useState(false);

    const handleSubmit = async () => {
        try {
            await auth.handleLogin({
                "username": username,
                "password": password
            });
            if (auth.state.isLoggedIn) {
                setRedirect(true);
            }
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            {redirect && (<Redirect from="/login" to="/"/>)}

            <ParticlesBackground/>

            <div className="formLogin">
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField className={classes.textField} id="standard-basic" label="EMAIL" onChange={(result) => {
                        setUsername(result.target.value)
                    }}/>
                    <TextField className={classes.textField} id="standard-password-input" label="MOT DE PASSE"
                               type="password" autoComplete="current-password" onChange={(result) => {
                        setPassword(result.target.value)
                    }}/>
                    <div className={classes.button}>
                        <Button className={classes.buttonProps} onClick={() => {
                            handleSubmit().then(r => null)
                        }} variant="outlined">Connexion</Button>
                    </div>
                </form>
            </div>

        </>
    );
}

