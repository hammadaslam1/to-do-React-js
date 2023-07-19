import React, { useState } from "react";
import List from "@mui/material/List";
import Items from "./Items";

export default function ListItem({ list, handleDelete, handleEditComplete, handleAchieve }) {
  return (
    <List sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}>
      {list.map((value, index) => {
        const labelId = `${index}`;
        // const val = value.value;
        // const ach = `${list[index].achieved}`;
        // console.log(list[index].value);
        return (
          <Items
            key={value.value}
            value={value.value}
            achieved={value.achieved}
            index={index}
            labelId={labelId}
            handleDelete={handleDelete}
            handleEditComplete={handleEditComplete}
            handleAchieve={handleAchieve}
          />
        );
      })}
    </List>
  );
}
