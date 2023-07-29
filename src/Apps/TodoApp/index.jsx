import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import ListItem from "./Components/ListItem";
import { firestore } from "../../firebase_setup/firebase";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, getDocs } from "../../firebase_setup/firebase";
import {
  query,
  where,
  orderBy,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import Error from "./Components/Error";

const Todo = () => {
  const auth = getAuth();
  const [todo, setTodo] = useState("");
  const [task, setTask] = useState([]);
  const [loadedAuth, setLoadedAuth] = useState(false);

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
    });
  };

  let currentTime;
  const handleNewItem = (event) => {
    if (event.key === "Enter") {
      if (event.target.value) {
        currentTime = new Date().getTime();
        
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

  const handleDelete = (index) => {
    deleteDoc(
      doc(firestore, "todos/" + auth.currentUser.uid + "/task", index)
    ).then(() => {
      getTasks();
    });
  };

  const handleEditComplete = (index, value) => {
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

  const editRequest = (index, edited) => {
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
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (auth.currentUser) {
        setLoadedAuth(true);
        getTasks();
      }
    });
  }, []);

  if (auth.currentUser) {
    return (
      <div>
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
    return <Error />;
  }
};

export default Todo;
