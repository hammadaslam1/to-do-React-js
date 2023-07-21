import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import ListItem from "./Components/ListItem";
import { auth } from "../../firebase_setup/firebase";
import { collection, addDoc, db } from "../../firebase_setup/firebase";
import Authentication from "./Components/Authentication";
import Navbar from "./Components/Navbar";
import Error from "./Components/Error";

const Todo = () => {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");
  if (auth.currentUser) {
    const handleNewItem = (event) => {
      if (event.key === "Enter") {
        if (event.target.value) {
          setList([
            { value: event.target.value, achieved: false, edited: false },
            ...list,
          ]);
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
      setList([...list]);
    };

    const handleAchieve = (id) => {
      list[id].achieved = true;
      setList([...list]);
    };

    return (
      <div>
        {/* <Navbar /> */}
        <Grid container spacing={2} sx={{ p: 5, rowGap: 4 }}>
          <Grid item xs={12} md={6}>
            <TextField
              id="outlined-basic"
              size="small"
              label="Add Task"
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
              Add Task
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
      </div>
    );
  } else {
    <Error />;
  }
};

export default Todo;
