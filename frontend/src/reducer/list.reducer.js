import { listConstants } from "../constants";

export function list(state = [], action) {
    switch (action.type) {
      case listConstants.GET_ALL_LIST_REQUEST:
        return {
          loading: true
        };
      case listConstants.GET_ALL_LIST_SUCCESS:
        return {
          list: action.list
        };
      case listConstants.GET_ALL_LIST_FAILURE:
        return {
          error: action.error
        };

      default:
        return state;
    }
  }
  