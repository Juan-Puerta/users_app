import React, { useState, useEffect } from "react";
import { local_api } from "../config/axios_local_api";

const AppContext = React.createContext();

export const AppContextWrapper = (props) => {
  const [searched_users, set_searched_users] = useState([]);
  const [saved_users, set_saved_users] = useState([]);
  const [followers, set_followers] = useState([]);
  const [user, set_user] = useState({});
  const [page, set_page] = useState(0);
  const pages = { search: 0, view: 1, saved: 2 };

  const get_saved_users = async () => {
    try {
      const resp = await local_api.get(`git_users/`);
      set_saved_users(resp.data);
    } catch (e) {
      console.log("Data base off");
    }
  };

  useEffect(() => {
    get_saved_users();
  }, []);

  const state = {
    searched_users,
    set_searched_users,
    followers,
    set_followers,
    user,
    set_user,
    saved_users,
    set_saved_users,
    page,
    set_page,
    pages,
    get_saved_users,
  };

  return (
    <AppContext.Provider value={state} displayName="AppContext">
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
