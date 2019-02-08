import React, { Fragment, Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  Form: {
    width: 390
  }
});
export default withStyles(styles)(
  class extends Component {
    state = {
      open: false,
      item: {
        title: "",
        description: "",
        category: ""
      }
    };

    handleToggle = () => {
      this.setState({
        open: !this.state.open
      });
    };
    handleChange = name => ({ target: { value } }) => {
      this.setState({
        item: {
          ...this.state.item,
          [name]: value
        }
      });
    };

    handleSubmit = () => {
      // todo validations

      const { item } = this.state;

      this.props.onCreate({
        ...item,
        id: item.title.toLocaleLowerCase().replace(/ /g, "-")
      });

      this.setState({
        open: false,
        item: {
          title: "",
          description: "",
          category: ""
        }
      });
    };
    render() {
      const {
        open,
        item: { title, description, category }
      } = this.state;
      const { categories, classes } = this.props;
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
              <form>
                <TextField
                  label="Title"
                  value={title}
                  onChange={this.handleChange("title")}
                  margin="normal"
                  className={classes.Form}
                />
                <br />
                <TextField
                  multiline
                  rows="4"
                  label="Description"
                  value={description}
                  onChange={this.handleChange("description")}
                  margin="normal"
                  className={classes.Form}
                />
                <br />
                <FormControl>
                  <InputLabel htmlFor="Category">category</InputLabel>
                  <Select
                    value={category}
                    onChange={this.handleChange("category")}
                  >
                    {categories.map(cat => (
                      <MenuItem key={cat} value={cat}>
                        {cat}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </form>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={this.handleSubmit}>
                Create
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      );
    }
  }
);
