import React, {useEffect, useState} from 'react';
import { IconButton } from '@material-ui/core';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import {getAllCompany} from "../../Service/DirectoryService";
import {useAuth} from "../../Store/Auth/auth";
import axios from "axios";
import {CREATE_APERITIF} from "../../Config/const";

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid rgba(3, 152, 158, 1)',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width:"50vw",
      textAlign:"center"
    },
  }));

export default function Apero() {
    var curr = new Date();
    curr.setDate(curr.getDate());
    var currentDate = curr.toISOString().substr(0,10);

    const auth = useAuth();
    const email = auth.state.user.email;
    const [allCompany,setAllCompagny] = useState();
    const [companySelected,setCompanySelected] = useState();
    const [date,setDate] = useState();
    const [heure,setHeure] = useState();
    const [motif,setMotif] = useState();
    const [titre,setTitre] = useState();
    const [localisation,setLocalisation] = useState();

    useEffect(async ()=>{
        let compagny = await getAllCompany();
        let test = compagny.map((item)=> {
            return {
                id : item.id,
                title : item.name
            }
        });
        setAllCompagny(test);
    },[]);

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const submit = () => {
        let finalDate = date + " " + heure+":00";
        axios.post(CREATE_APERITIF,{
            email: email,
            date: finalDate,
            emergency: titre,
            meetingPoint: localisation,
            reason: motif,
            companie: companySelected.id,
        }).then((data) => {
            handleClose();
        }).catch()
    }

    return (
        <div className={'apero-div'}>
            <IconButton className={'apero'} onClick={handleOpen}>
                <LocalBarIcon />
            </IconButton>

            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
                <form className={'aperoForm'} noValidate autoComplete="off">
                    <TextField
                        className="input"
                        id="TITRE"
                        label="TITRE"
                        onChange={(event) => {
                            setTitre(event.target.value)
                        }}
                    />
                    <TextField
                        className="input"
                        id="LOCALISATION"
                        label="LOCALISATION"
                        onChange={(event) => {
                            setLocalisation(event.target.value)
                        }}
                    />
                    <TextField
                        className="halfInput"
                        label="CHOISISSEZ UNE DATE"
                        id="date"
                        type="date"
                        defaultValue={currentDate}
                        onChange={(event) => {
                            setDate(event.target.value)
                        }}
                        InputLabelProps={{
                        shrink: true,
                    }}/>
                    <TextField
                        className="halfInput"
                        label="CHOISISSEZ UNE HEURE"
                        id="time"
                        type="time"
                        defaultValue="19:30"
                        onChange={(event) => {
                            setHeure(event.target.value)
                        }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          step: 300, // 5 min
                        }}
                    /><br/>

                    <Autocomplete
                        className={'input'}
                        id="multiple-limit-tags"
                        options={allCompany}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => (
                            <TextField {...params} label="ENTREPRISE"/>
                        )}
                        value={companySelected}
                        onChange={(event, newValue) => {
                            setCompanySelected(newValue);
                        }}
                    />

                    <TextField
                        className="input"
                        id="MOTIF"
                        label="MOTIF"
                        onChange={(event) => {
                            setMotif(event.target.value)
                        }}
                    /><br/>
                    <Button
                        className="ideaButton"
                        onClick={() => {submit()}}
                    >Envoyer une invitation !</Button>
                </form>
            </div>
        </Fade>
      </Modal>
        </div>


    )
}
