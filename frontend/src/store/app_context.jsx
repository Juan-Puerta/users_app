import React, { useState } from "react";

const AppContext = React.createContext();

export const AppContextWrapper = (props) => {
  const [searched_users, set_searched_users] = useState([]);
  const [followers, set_followers] = useState([]);
  const [user, set_user] = useState({});

  const state = {
    searched_users,
    set_searched_users,
    followers,
    set_followers,
    user,
    set_user,
  };

  return (
    <AppContext.Provider value={state} displayName="AppContext">
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
