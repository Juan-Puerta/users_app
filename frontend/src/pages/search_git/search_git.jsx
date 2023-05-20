import React, { useContext } from "react";
import AppContext from "../../store/app_context";
import InfoUser from "../../components/info_user/info_user";
import "./search_git.css";

const SearchGit = () => {
  const state = useContext(AppContext);

  return (
    <div className="user_git">
      {JSON.stringify(state.user) === "{}" ? <></> : <InfoUser />}
    </div>
  );
};

export default SearchGit;
