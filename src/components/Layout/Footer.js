import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default ({ categories, category, onSelect }) => {
  const index = category
    ? categories.findIndex(group => group === category) + 1
    : 0;

  const handleChangeCatIndex = (e, index) => {
    onSelect(index === 0 ? "" : categories[index - 1]);
  };

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={handleChangeCatIndex}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {categories.map(group => (
          <Tab label={group} key={group} />
        ))}
      </Tabs>
    </Paper>
  );
};
