import React, {useState} from 'react';
import List from '@mui/material/List';
import Items from './Items'

export default function ListItem({list, handleDelete, handleEdit, handleEditComplete}) {
  

  return (
    <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
      {list.map((value, index) => {
        const labelId = `${index}`;

        return (
          <Items key={index} value={value} index={index} labelId={labelId} handleDelete={handleDelete} handleEdit={handleEdit} handleEditComplete={handleEditComplete}/>
        );
      })}
    </List>
  );
}
