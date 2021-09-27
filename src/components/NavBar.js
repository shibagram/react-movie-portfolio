import React, { useContext } from "react";
import { withCookies } from "react-cookie";
import { makeStyles } from "@material-ui/core/styles";
import { ApiContext } from "../context/ApiContext";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { FiLogOut } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const { modalIsOpen, setModalIsOpen } = useContext(ApiContext);

  const logout = () => {
    props.cookies.remove("jwt-token");
    window.location.href = "/";
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <button className="logo">
          <FaYoutube />
        </button>
        <Typography variant="h5" className={classes.title}>
          React×Django WebApp Portfolio
        </Typography>

        <button className="plus" onClick={() => setModalIsOpen(true)}>
          <AiFillPlusCircle />
        </button>

        <button className="logout" onClick={() => logout()}>
          <FiLogOut />
        </button>
      </Toolbar>
    </AppBar>
  );
};

export default withCookies(NavBar);
