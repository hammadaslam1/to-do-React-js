import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import LItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import { TextField } from "@mui/material";

const Items = ({
  value,
  achieved,
  labelId,
  handleDelete,
  index,
  handleEditComplete: handleEditFinal,
  handleAchieve,
}) => {
  const [isEdit, setEdit] = useState(false);
  const [textValue, setTextValue] = useState(value);
  const [achieve, setAchieved] = useState(false);
  const handleEditComplete = () => {
    handleEditFinal(index, textValue);
    setEdit(false);
  };
  // console.log(achieved);
  const handleAchieved = () => {
    setAchieved(!achieve);
    if (!achieve) {
      handleAchieve(index);
    }
  };
  // useEffect(() => {
  //   setTextValue(value);
  //   setAchieved(false);
  // }, [value, achieve]);

  return (
    <div className="items">
      <LItem
        key={labelId}
        secondaryAction={
          isEdit ? (
            <>
              <IconButton
                edge="start"
                aria-label="edit"
                onClick={() => handleEditComplete()}
                color="info"
              >
                <DoneIcon />
              </IconButton>
            </>
          ) : (
            <>
              {<IconButton
                edge="start"
                aria-label="edit"
                onClick={() => setEdit(true)}
                title="Edit"
                color="primary"
                disabled={achieved}
              >
                <EditIcon />
              </IconButton>}
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDelete(index)}
                title="Delete"
              >
                <DeleteIcon color="error" />
              </IconButton>
            </>
          )
        }
        disablePadding
      >
        <ListItemButton
          role={undefined}
          // dense
          disableRipple   
        >
          <ListItemIcon>
            {(
              <Checkbox
                edge="start"
                
                // achieved={achieved.indexOf(value) !== -1}
                tabIndex={-1}
                onChange={() => handleAchieved()}
                checked={achieved}
                title={!achieved?'Mark as read.':'Marked as read.'}
                disabled={achieved}
                // disableRipple
                // inputProps={{ "aria-labelledby": labelId }}
              />
              )}
          </ListItemIcon>
          {!isEdit ? (
            achieved ? (
              <ListItemText
                id={labelId}
                sx={{ textDecoration: "line-through", color: "red", fontWeight: '800' }}
                size="large"
                primary={`${textValue}`}
              />
            ) : (
              <ListItemText id={labelId} primary={`${textValue}`} />
            )
          ) : (
            <TextField
              size="small"
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
            />
          )}
        </ListItemButton>
      </LItem>
    </div>
  );
};

export default Items;
