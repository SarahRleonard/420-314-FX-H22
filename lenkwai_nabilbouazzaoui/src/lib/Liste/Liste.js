import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import './liste.css';

export function Liste(...props) {
    return (
      <ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>
          // <List>
          //   <ListItem >
          //       <ListItemText primary="Item 1"/>
          //   </ListItem>
          //   <ListItem >
          //       <ListItemText primary="Item 2" />
          //   </ListItem>
          //   <ListItem >
          //       <ListItemText primary="Item 3" />
          //   </ListItem>
          //   <ListItem >
          //       <ListItemText primary="Item 4" />
          //   </ListItem>
          // </List>
    );
  };

  export function ListePoints(...props){
    return(
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>
    );
  };

export default Liste;

