import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "../pages/main_page";
import SearchUsers from "../pages/search_users/search_users";

const routing = (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<MainPage />}>
        <Route index element={<SearchUsers />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default routing;
