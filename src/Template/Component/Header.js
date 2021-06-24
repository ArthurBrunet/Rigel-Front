import {
    Link
} from "react-router-dom";
import React, {useState} from 'react'
import { IconButton } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import paul from '../../Assets/paul.jpg';

export function Header() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <>
            <header>
                <h2>Rigel</h2>
                <div className={'profile'}>
                    <Avatar src={paul}/>

                    <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                      <KeyboardArrowDownIcon/>
                    </IconButton>

                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={anchorEl}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem><br/>
                      <MenuItem onClick={handleClose}>My account</MenuItem><br/>
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
            </header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/talk">Chats</Link>
                    </li>
                    <li>
                        <Link to="/directory">Annuaire</Link>
                    </li>
                    <li>
                        <Link to="/ideabox">Boîte à idées</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
