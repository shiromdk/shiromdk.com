import { combineReducers } from "redux";
import { list } from "./list.reducer";
import { authentication } from "./auth.reducer";
import { alert } from "./alert.reducer";
const appReducer = combineReducers({
  alert,
  authentication,
  list,
});

const rootReducer = (state, action) => {
  // when exam finished

  return appReducer(state, action);
};

export default rootReducer;
