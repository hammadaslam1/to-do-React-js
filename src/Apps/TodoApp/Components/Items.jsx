import React, { useEffect, useState } from "react";
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
  edited,
  labelId,
  handleDelete,
  index,
  handleEditComplete: handleEditFinal,
  handleAchieve,
  editRequest,
}) => {
  const [textValue, setTextValue] = useState(value);
  const handleEditComplete = () => {
    handleEditFinal(index, textValue);
  };

  const handleEditRequest = () => {
    editRequest(index, true);
  };
  const handleAchieved = () => {
    handleAchieve(index);
  };

  return (
    <div className="items">
      <LItem
        key={labelId}
        secondaryAction={
          edited ? (
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
              {
                <IconButton
                  edge="start"
                  aria-label="edit"
                  onClick={() => handleEditRequest()}
                  title="Edit"
                  color="primary"
                  disabled={achieved}
                >
                  <EditIcon />
                </IconButton>
              }
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
            {
              <Checkbox
                edge="start"
                tabIndex={-1}
                onChange={() => handleAchieved()}
                checked={achieved}
                title={!achieved ? "Mark as read." : "Marked as read."}
                disabled={achieved}
              />
            }
          </ListItemIcon>
          {!edited ? (
            achieved ? (
              <ListItemText
                id={labelId}
                sx={{
                  textDecoration: "line-through",
                  color: "red",
                  fontWeight: "800",
                }}
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
