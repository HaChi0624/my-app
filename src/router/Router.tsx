import { FC, memo } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";

import { Login } from "../components/pages/Login";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element=
        {
          <HeaderLayout>
            <Outlet />
          </HeaderLayout>
        }>
        <Route path="/home" element={<Home />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/user" element={<UserManagement />} />
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
