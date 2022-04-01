import config from "config";
import handleResponse from "../helpers/handleResponse";

export const getLists = (list) => {
  const requestOptions = {
    method: "GET",
  };
  return fetch(`${config.apiUrl}/list`, requestOptions).then(handleResponse);
};

export const listService = {
  getLists,
};
