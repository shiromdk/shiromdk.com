import React from "react";
import styled from "styled-components";
import { Container, Grid, Paper } from "@mui/material";
const NoteComponent = (props) => (
  <Grid key={props.key} className={props.className} item>
    <Paper elevation={16}>
      <StyledPaperDiv listItem={props.listItem}></StyledPaperDiv>
    </Paper>
  </Grid>
);

const PaperDiv = (props) => (
  <div className={props.className}>
    <div dangerouslySetInnerHTML={{ __html: props.listItem }} />
  </div>
);

const StyledPaperDiv = styled(PaperDiv)`
    padding: 2em;
`;

const StyledNoteComponent = styled(NoteComponent)`
    max-width: 500px;
    
`;

export default StyledNoteComponent;
