import React, { useState } from "react";
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
  labelId,
  handleDelete,
  index,
  handleEdit,
  handleEditComplete: handleEditFinal,
}) => {
  const [isEdit, setEdit] = useState(false);
  const [textValue, setTextValue] = useState(value);
  const handleEditComplete = () => {
    handleEditFinal(index, textValue);
    setEdit(false);
  };
  return (
    <div className="items">
      <LItem
        key={value}
        secondaryAction={
          isEdit ? (
            <>
              <IconButton
                edge="start"
                aria-label="edit"
                onClick={() => handleEditComplete()}
              >
                <DoneIcon />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton
                edge="start"
                aria-label="edit"
                onClick={() => setEdit(true)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDelete(index)}
              >
                <DeleteIcon style={{ color: "red" }} />
              </IconButton>
            </>
          )
        }
        disablePadding
      >
        <ListItemButton
          role={undefined}
          // onClick={handleToggle(value)}
          dense
        >
          <ListItemIcon>
            <Checkbox
              edge="start"
              // checked={checked.indexOf(value) !== -1}
              tabIndex={-1}
              disableRipple
              inputProps={{ "aria-labelledby": labelId }}
            />
          </ListItemIcon>
          {!isEdit ? (
            <ListItemText id={labelId} primary={`${""}  ${textValue}`} />
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
