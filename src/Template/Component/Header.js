import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Box, IconButton } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import {useAuth} from "../../Store/Auth/auth";

export function Header() {
  const useStyles = makeStyles((theme) => ({
    dropdownMenu: {
      backgroundColor: "red",
    },
  }));
  let auth = useAuth();
  let role = auth.state.user.roles[0];
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const history = useHistory();

  const handleRoute = () => {
    history.push("/profil");
  };

  const StyledMenu = withStyles({
    paper: {
      border: "1px solid #d3d4d5",
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      "&:focus": {
        backgroundColor: "#03989E",
        "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);
 return (
    <>
      <header>
        <h2>Sirius</h2>
        <div className={"profile"}>
          <Box>
            <Avatar />
          </Box>

          <div>
            <IconButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <KeyboardArrowDownIcon />
            </IconButton>

            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem>
                <ListItemText
                  onClick={() => {
                    history.push("/profil");
                  }}
                  primary="Profile"
                />
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemText primary="Logout" />
              </StyledMenuItem>
            </StyledMenu>
          </div>
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
          {role === "ROLE_ADMIN" && (
              <li>
                <Link to="/newUser">Creation utilisateur</Link>
              </li>
          )}
        </ul>
      </nav>
    </>
  );
}
