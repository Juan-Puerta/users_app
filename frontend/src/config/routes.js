import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "../pages/main_page";
import SearchUsers from "../pages/search_users/search_users";
import SearchGit from "../pages/search_git/search_git";
import User from "../pages/user/user";

const routing = (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<MainPage />}>
        <Route index element={<SearchUsers />} />
        <Route path="user" element={<SearchGit />} />
        <Route path="user/:id" element={<User />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default routing;
