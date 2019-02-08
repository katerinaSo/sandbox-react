import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";

const style = {
  paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};

export default ({ items }) => (
  <Grid container xs>
    <Grid item xs>
      <Paper style={style.paper}>
        {items.map(([category, items]) => (
          <Fragment>
            <Typography
              variant="headline"
              style={{ textTransform: "capitalize" }}
            >
              {category}
            </Typography>
            <List component="nav">
              {items.map(item => (
                <ListItem button>
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
            </List>
          </Fragment>
        ))}
      </Paper>
    </Grid>
    <Grid item xs>
      <Paper style={style.paper}>right</Paper>
    </Grid>
  </Grid>
);
