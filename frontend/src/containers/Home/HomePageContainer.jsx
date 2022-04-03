import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";

import { NoteAdd } from "@mui/icons-material";

import { listActions } from "../../action";
import { Typography } from "@mui/material";

const HomePageContainer = () => {
  
  const [listData, setListData] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    // listActions.getLists().then((res) => {
    //   setListData([...res]);
    // });
  }, []);

  return (
    <div>
      <Container>
          <Typography  variant="h1" component="h1">WIP</Typography>
      </Container>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels value={modal}>

          <BottomNavigationAction label="Add Note" icon={<NoteAdd />} />
        </BottomNavigation>
      </Paper>
    </div>
  );
};

export default HomePageContainer;
