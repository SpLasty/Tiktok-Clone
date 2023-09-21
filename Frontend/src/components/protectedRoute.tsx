import { ReactNode, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import useGeneralStore from "../store/generalStore";

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const user = useUserStore((state) => state);
  const navigate = useNavigate();
  const setLoginIsOpen = useGeneralStore((state) => state.setLoginIsOpen);
  useEffect(() => {
    if (!user.id) {
      navigate("/");
      setLoginIsOpen(true);
    }
  }, [user.id, navigate, setLoginIsOpen]);

  if (!user.id) {
    return <> Access Failed</>;
  }

  return <>{children}</>; // render corresponding components/pages
};

export default ProtectedRoutes;
