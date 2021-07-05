import React from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import {ParticlesBackground} from './ParticlesBackground';
import Button from '@material-ui/core/Button';

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
    return (
        <>
            <ParticlesBackground />

            <div className="formLogin">
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField className={classes.textField} id="loginformRoot" label="EMAIL"/>
                    <TextField className={classes.textField} id="loginformRoot" label="MOT DE PASSE"
                               type="password" autoComplete="current-password"/>
                    <div className={classes.button}>
                        <Button className={classes.buttonProps} variant="outlined">Connexion</Button>
                    </div>
                </form>
            </div>

        </>
    );
}

