import React from "react";
import Grid from "@material-ui/core/Grid";
import Left from "./LeftPane";
import Right from "./RightPane";
const style = {
  paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};

export default props => (
  <Grid container xs>
    <Grid item xs>
      <Left style={style} />
    </Grid>
    <Grid item xs>
      <Right style={style} />
    </Grid>
  </Grid>
);
