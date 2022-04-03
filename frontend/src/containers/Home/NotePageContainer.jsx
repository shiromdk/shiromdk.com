import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";

import { NoteAdd } from "@mui/icons-material";

import { listActions } from "../../action";
import ListComponent from "../../components/Home/ListComponent";

const NotePageContainer = () => {
  
  const [listData, setListData] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    listActions.getLists().then((res) => {
      setListData([...res]);
    });
  }, []);

  return (
    <div>
      <Container>
        <ListComponent data={listData} />
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

export default NotePageContainer;
