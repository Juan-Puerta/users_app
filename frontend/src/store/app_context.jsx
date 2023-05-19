import React, { useState } from "react";

const AppContext = React.createContext();

export const AppContextWrapper = (props) => {
  const [searched_users, set_searched_users] = useState([]);

  const state = { searched_users, set_searched_users };

  return (
    <AppContext.Provider value={state} displayName="AppContext">
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
