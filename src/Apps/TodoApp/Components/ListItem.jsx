import React, { useEffect, useState } from "react";


import List from "@mui/material/List";
import Items from "./Items";
import {
  firestore,
  getDocs,
  collection,
  auth,
} from "../../../firebase_setup/firebase";

export default function ListItem({
  task,
  handleDelete,
  handleEditComplete,
  handleAchieve,
  editRequest,
}) {
  

 
  return (
    <List sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}>
      {task.map((value, key) => {
        const labelId = `${key}`;
        return (
          <Items
            key={value.value}
            value={value.value}
            achieved={value.achieved}
            edited={value.edited}
            index={value.key}
            labelId={labelId}
            handleDelete={handleDelete}
            handleEditComplete={handleEditComplete}
            handleAchieve={handleAchieve}
            editRequest={editRequest}
          />
        );
      })}
    </List>
  );
}
