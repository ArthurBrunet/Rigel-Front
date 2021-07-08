import React, {useEffect, useState} from 'react';
import {
    Redirect,
    useParams
} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {GET_USER_TOKEN, REGISTER_USER} from "../../Config/const";
import axios from "axios";

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
    },
    error: {
        color: '#743c3c',
        borderColor: 'white',
        borderRadius: '30px'
    },
    container: {
        backgroundColor: 'rgb(3, 152, 158)',
        width: '100vw',
        height: '100vh'
    }
}));


export function RegisterScreen() {
    const classes = useStyles();
    const params = useParams()
    const [authoriser,setAuthoriser] = useState(false);
    const [user,setUser] = useState();
    const [nom,setNom] = useState();
    const [prenom,setPrenom] = useState();
    const [telephone,setTelephone] = useState();
    const [drink,setDrink] = useState();
    const [password,setPassword] = useState();
    const [passwordConfirm,setPasswordConfirm] = useState();

    const [error,setError] = useState();
    let [redirect, setRedirect] = useState(false);
    useEffect(() => {
        console.log(params.token);
        axios.get(GET_USER_TOKEN+params.token).then((data) => {
            if(data.data !== "user dont exist"){
                setAuthoriser(true);
                setUser(data.data);
            }
        }).catch((e) => {
            console.log(e)
        })
    },[])

    const submit = () => {
        if (password === passwordConfirm) {
            axios.post(REGISTER_USER,{
                token: params.token,
                email: user.email,
                password: password,
                name: nom,
                firstname: prenom,
                avatar: null,
                phoneNumber: telephone,
                drink: drink
            }).then(() => {
                setRedirect(true);
            }).catch((e) => {
                console.log(e)
            });
        }else{
            setError("mot de passe incorrect");
        }
    }

    return (<>{authoriser && (
        <div className={classes.container}>
            {redirect && <Redirect from="/login" to="/" />}
            <div className={classes.root}>
                <form noValidate autoComplete="off">
                    {error && (
                        <p className={classes.error}>{error}</p>
                    )}
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextField className={classes.textField} id="loginformRoot" label="NOM"
                                       onChange={(event) => {
                                           setNom(event.target.value);
                                       }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField className={classes.textField} id="loginformRoot" label="PRÉNOM"
                                       onChange={(event) => {
                                           setPrenom(event.target.value);
                                       }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField className={classes.textField} id="loginformRoot" label="TELEPHONE" type="tel"
                                       onChange={(event) => {
                                           setTelephone(event.target.value);
                                       }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField className={classes.textField} id="loginformRoot" label="BOISSON FAVORITE"
                                       onChange={(event) => {
                                           setDrink(event.target.value);
                                       }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField className={classes.textField} id="loginformRoot" label="MOT DE PASSE" type="password"
                                       onChange={(event) => {
                                           setPassword(event.target.value);
                                       }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField className={classes.textField} id="loginformRoot" label="CONFIRMER LE MOT DE PASSE" type="password"
                                       onChange={(event) => {
                                           setPasswordConfirm(event.target.value);
                                       }}
                            />
                        </Grid>
                        <div className={classes.button}>
                            <Button className={classes.buttonProps} variant="outlined" onClick={() => {submit()}}>CRÉER MON COMPTE</Button>
                        </div>
                    </Grid>
                </form>
            </div>
        </div>
    )}</>);
}
