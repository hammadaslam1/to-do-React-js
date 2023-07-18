import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import ListItem from "./Components/ListItem";
import Buttons from "./Components/Buttons";
import ButtonGroups from "./Components/ButtonGroups";
import Checkboxes from "./Components/Checkboxes";
import FAB from "./Components/FloatingActionButton";

const Todo = () => {
  // return (
  //     <div className="p-10 flex w-[fit-content] items-center">
  //     <Buttons/>
  //     <ButtonGroups />
  //     <Checkboxes />
  //     <FAB />
  // </div>
  // )

  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");
  const [isEdited, setIsEdited] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [key, setKey] = useState("");
  const handleNewItem = (event) => {
    if (event.key === "Enter") {
      setList([event.target.value, ...list]);
      setTodo("");
    }
  };

  const handleItemOnClick = (event) => {
    setList([todo, ...list]);
    setTodo("");
  };

  const handleDelete = (id) => {
    console.log(id);
    list.splice(id, 1);
    setList([...list]);
  };

  const handleEdit = (id) => {
    setKey(id);
    setIsEdited(true);
    if (!isEdited) {
      setInputValue("");
    }
    console.log(list[id]);
    setInputValue(list[id]);
  };
  const handleTextInputChange = (e) => {
    if (e.key === "Enter") {
      list[key] = inputValue;
      setList([...list]);
      setIsEdited(false);
    }
  };

  const handleEditComplete = (index, value) => {
    console.log('handleEditComplete', value)
    list[index] = value;
    setList([...list]);
  };

  console.log(list)
  return (
    <Grid container spacing={2} sx={{ p: 5, rowGap: 4 }}>
      <Grid item xs={12} md={6}>
        <TextField
          id="outlined-basic"
          size="small"
          label="Add Text"
          variant="outlined"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
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
      <Grid item xs={12} md={12}>
        {isEdited && (
          <TextField
            size="small"
            label="Add Text"
            variant="outlined"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleTextInputChange}
            fullWidth
          />
        )}
      </Grid>
      <Grid item xs={12}>
        <ListItem
          list={list}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleEditComplete={handleEditComplete}
        />
      </Grid>
    </Grid>
  );
};

export default Todo;
