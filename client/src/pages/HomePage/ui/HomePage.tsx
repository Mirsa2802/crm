import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cx from "classix";

import { Alert } from "@/widgets/Alert";
import { getIsAuth } from "@/entities/User";
import { ROUTER_PATH } from "@/shared/const/path/PATH";
import { useAppSelector } from "@/shared/hooks";
import { Footer } from "@/widgets/Footer";

export const HomePage = () => {
  const navigate = useNavigate();

  const isAuth = useAppSelector(getIsAuth);

  const className = cx("home__container");

  useEffect(() => {
    if (!isAuth) {
      navigate(ROUTER_PATH.LOGIN);
    }
  }, [isAuth, navigate]);

  return (
    <div className={className}>
      <Alert count={0} 
            title="Контрагента ожидают в стадии “Подписание контракта”"
            alert="Подпишите контракты с контрагентами или переведите их в архивные"
            />
      <Footer />
    </div>
  );
};

export default HomePage;
