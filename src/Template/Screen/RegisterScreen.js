import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {ParticlesBackground} from './ParticlesBackground';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxSizing: 'content-box'
    },
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


export function RegisterScreen() {
    const classes = useStyles();

    return (
        <>
            <ParticlesBackground/>
            <div className={classes.root}>
                <form noValidate autoComplete="off">

                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextField className={classes.textField} id="standard-basic" label="NOM"/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField className={classes.textField} id="standard-basic" label="PRÉNOM"/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField className={classes.textField} id="standard-basic" label="MOT DE PASSE"/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField className={classes.textField} id="standard-basic"
                                       label="CONFIRMER LE MOT DE PASSE"/>
                        </Grid>
                        <div className={classes.button}>
                            <Button className={classes.buttonProps} variant="outlined">CRÉER MON COMPTE</Button>
                        </div>

                    </Grid>
                </form>
            </div>
        </>
    );
}
