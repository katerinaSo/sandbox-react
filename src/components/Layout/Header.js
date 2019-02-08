import React from "react";
import "material-ui";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import CreateDialog from "../Todos/CRUD/Create";

export default props => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
        Todos
      </Typography>
      <CreateDialog />
    </Toolbar>
  </AppBar>
);
