import React from 'react';
import { IconButton } from '@material-ui/core';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

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
    let curr = new Date();
    curr.setDate(curr.getDate());
    let currentDate = curr.toISOString().substr(0,10);

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

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
                        className="halfInput" 
                        label="CHOISISSEZ UNE DATE"
                        id="date"
                        type="date"
                        defaultValue={currentDate}
                        InputLabelProps={{
                        shrink: true,
                    }}/>
                    <TextField 
                        className="halfInput" 
                        label="CHOISISSEZ UNE HEURE"
                        id="time"
                        type="time"
                        defaultValue="19:30"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          step: 300, // 5 min
                        }}
                    /><br/>

                    <Autocomplete
                        className={'input'}
                        multiple
                        id="multiple-limit-tags"
                        options={entreprise}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => (
                            <TextField {...params} label="ENTREPRISE"/>
                        )}
                    />

                    <TextField 
                        className="input" 
                        id="MOTIF" 
                        label="MOTIF"
                    /><br/>
                    <Button className="ideaButton">Envoyer une invitation !</Button>
                </form>
            </div>
        </Fade>
      </Modal>
        </div>

        
    )
}
const entreprise = [
    {title: 'example 1'},
    {title: 'example 2'},
    {title: 'example 3'},
    {title: 'example 4'},
    {title: 'example 5'},
    {title: 'example 6'},
]
