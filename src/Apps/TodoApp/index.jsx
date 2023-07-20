import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import ListItem from "./Components/ListItem";
// import {ref} from 'firebase'
import Buttons from "./Components/Buttons";
import ButtonGroups from "./Components/ButtonGroups";
import Checkboxes from "./Components/Checkboxes";
import FAB from "./Components/FloatingActionButton";
import { db, getAuth } from "../../firebase_setup/firebase";
import { onValue, ref } from "firebase/database";
import Login from "./Components/Login";


const Todo = () => {
  // return <div className="p-10 flex w-[fit-content] items-center">

  // </div>;

  // return (
  //     <div className="p-10 flex w-[fit-content] items-center">
  //     <Buttons/>
  //     <ButtonGroups />
  //     <Checkboxes />
  //     <FAB />
  // </div>
  // )

  const auth = getAuth();

  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");
  const [isEdited, setIsEdited] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [key, setKey] = useState("");
 if (auth.currentUser) {



  const handleNewItem = (event) => {
    if (event.key === "Enter") {
      if (event.target.value) {
        setList([{ value: event.target.value, achieved: false, edited: false }, ...list]);
      }
      setTodo("");
    }
  };

  const handleItemOnClick = (event) => {
    if (todo) {
      setList([{ value: todo, achieved: false }, ...list]);
      // ref
    }
    setTodo("");
  };

  const handleDelete = (id) => {
    list.splice(id, 1);
    setList([...list]);
  };

  const handleEditComplete = (index, value) => {
    list[index].value = value;
    list[index].edited = false;
    setList([...list]);
  };

  const editRequest = (index, edited) => {
    list[index].edited = edited;
    setList([...list])
  }

  const handleAchieve = (id) => {
    list[id].achieved = true;
    setList([...list]);
  };

  return (
    <Grid container spacing={2} sx={{ p: 5, rowGap: 4 }}>
      <Grid item xs={12} md={6}>
        <TextField
          id="outlined-basic"
          size="small"
          label="Add Text"
          variant="outlined"
          value={todo}
          onChange={(e) => {
            // console.log(list);
            setTodo(e.target.value);
          }}
          onKeyDown={handleNewItem}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Button
          color="secondary"
          variant="contained"
          onClick={handleItemOnClick}
          disableElevation
          fullWidth
        >
          Add Todo Item
        </Button>
      </Grid>

      <Grid item xs={12}>
        <ListItem
          list={list}
          handleDelete={handleDelete}
          handleEditComplete={handleEditComplete}
          handleAchieve={handleAchieve}
          editRequest={editRequest}
        />
      </Grid>
    </Grid>
  );
}
else {
  return (
    <Login />
  )
}
}

export default Todo;
