import React, { useState, useEffect } from "react";
import { Container, Grid, Paper } from "@mui/material";
import NoteComponent from './NoteComponent'

const ListComponent = (props) => {
  if (props.data.length > 0) {
    return (
      <Grid container>
        {props.data.map((listItem, key) => {
          return (
            <NoteComponent key={key} listItem={listItem} />
          );
        })}
      </Grid>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default ListComponent;
