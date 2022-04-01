import React, { FunctionComponent, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import history from "../helpers/history";
import HomePageContainer from "./Home/HomePageContainer";

const App = () => {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<HomePageContainer/>} />
      </Routes>
    </Router>
  );
};

export default App;
