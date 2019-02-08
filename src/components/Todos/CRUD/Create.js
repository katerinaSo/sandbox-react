import React, { Fragment, Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import NavigationIcon from "@material-ui/icons/Navigation";

export default class extends Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };
  render() {
    const { open } = this.state;
    return (
      <Fragment>
        <Fab
          onClick={this.handleToggle}
          color="primary"
          size="small"
          aria-label="Add"
        >
          <AddIcon />
        </Fab>
        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create New </DialogTitle>
          <DialogContent>
            <DialogContentText>fill out the form</DialogContentText>
            <form />
          </DialogContent>
          <DialogActions>
            <Button color="primary">Create</Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
