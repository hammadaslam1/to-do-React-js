import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import ListItem from "./Components/ListItem";
import { auth, firestore } from "../../firebase_setup/firebase";
import { collection, addDoc, getDocs } from "../../firebase_setup/firebase";
import {
  query,
  where,
  orderBy,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import Authentication from "./Components/Authentication";
import Navbar from "./Components/Navbar";
import Error from "./Components/Error";

const Todo = () => {
  // const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");
  const [task, setTask] = useState([]);
  if (auth.currentUser) {
    
    const getTasks = async () => {
      await getDocs(
        query(
          collection(firestore, "todos/" + auth.currentUser.uid + "/task"),
          orderBy("time", "desc")
        )
      ).then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          key: doc.id,
        }));
        setTask(data);
        console.log(data);
      });
    };

    
    let currentTime;
    const handleNewItem = (event) => {
      if (event.key === "Enter") {
        if (event.target.value) {
          currentTime = new Date().getTime();
          console.log(currentTime);
          const taskRef = addDoc(
            collection(firestore, "todos/" + auth.currentUser.uid + "/task"),
            {
              value: event.target.value,
              achieved: false,
              edited: false,
              time: currentTime,
            }
          );

          getTasks();
        }
        setTodo("");
      }
    };

    const handleItemOnClick = (event) => {
      if (todo) {
        currentTime = new Date().getTime();
        const taskRef = addDoc(
          collection(firestore, "todos/" + auth.currentUser.uid + "/task"),
          { value: todo, achieved: false, edited: false, time: currentTime }
        );
        getTasks();
      }
      setTodo("");
    };

    const handleDelete =  (index) => {
       deleteDoc(
        doc(firestore, "todos/" + auth.currentUser.uid + "/task", index)
      ).then(() => {
        getTasks();
        console.log(index);
      });
    };

    const handleEditComplete = (index, value) => {
      console.log("in edit");
       updateDoc(
        doc(firestore, "todos/" + auth.currentUser.uid + "/task", index),
        {
          value: value,
          edited: false,
        }
      ).then(() => {
        getTasks();
      });
    };

    const editRequest =  (index, edited) => {
      console.log("in edit request");
       updateDoc(
        doc(firestore, "todos/" + auth.currentUser.uid + "/task", index),
        {
          edited: edited,
        }
      ).then(() => {
        getTasks();
      });
    };

    const handleAchieve = (index) => {
      updateDoc(
        doc(firestore, "todos/" + auth.currentUser.uid + "/task", index),
        {
          achieved: true,
        }
      ).then(() => {
        getTasks();
      });
      console.log("in achieve");
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
                setTodo(e.target.value);
              }}
              onKeyDown={handleNewItem}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              color="info"
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
              task={task}
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
