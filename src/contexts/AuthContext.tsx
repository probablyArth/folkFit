import { commonFCProps } from "../types/common";
import { FC, createContext, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const AuthContext = createContext({});

const AuthContextProvider: FC<commonFCProps> = ({ children }) => {
  const router = useRouter();
  const session = useSession();
  const pathname = router.pathname;
  const protectedRoutes = ["/feed", "/chat", "/profile", "/dashboard"];
  useEffect(() => {
    if (
      session.status == "unauthenticated" &&
      protectedRoutes.includes(pathname)
    ) {
      router.push("/");
      return;
    }
  }, [pathname, session.status]);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
