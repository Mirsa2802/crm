import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/index.scss";
import { AuthPage } from "@/pages/AuthPage";
import { ROUTER_PATH } from "@/shared/const/path/PATH";
import { AuthFormType } from "@/features/AuthForm";

export const App = () => {
  return (
    <BrowserRouter>
      <Route index element={<>home</>} />
      <Route
        path={ROUTER_PATH.LOGIN}
        element={<AuthPage type={AuthFormType.LOGIN} />}
      />
      <Route
        path={ROUTER_PATH.REGISTER}
        element={<AuthPage type={AuthFormType.REGISTER} />}
      />
    </BrowserRouter>
  );
};
