import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";

const style = {
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 300,
    overflowY: "auto"
  }
};

export default ({
  items,
  category,
  onSelectItem,
  item: { id, title = "Welcome!", description = "message goes here" }
}) => (
  <Grid container xs>
    <Grid item xs>
      <Paper style={style.paper}>
        {items.map(([group, items]) =>
          !category || category === group ? (
            <Fragment key={group}>
              <Typography
                variant="headline"
                style={{ textTransform: "capitalize" }}
              >
                {group}
              </Typography>
              <List component="nav">
                {items.map(({ id, title }) => (
                  <ListItem
                    button
                    key={id}
                    onClick={() => {
                      onSelectItem(id);
                    }}
                  >
                    <ListItemText primary={title} />
                  </ListItem>
                ))}
              </List>
            </Fragment>
          ) : null
        )}
      </Paper>
    </Grid>
    <Grid item xs>
      <Paper style={style.paper}>
        <Typography variant="display1">{title}</Typography>
        <Typography variant="subheading" style={{ marginTop: 10 }}>
          {description}
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
