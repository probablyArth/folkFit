import { commonFCProps } from "../types/common";
import { FC, createContext, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { AppShell } from "@mantine/core";
import Navbar from "../components/Navbar";

const AuthContextProvider: FC<commonFCProps> = ({ children }) => {
  const router = useRouter();
  const session = useSession();
  const pathname = router.pathname;
  const protectedRoutes = ["/feed", "/chat", "/profile"];
  useEffect(() => {
    if (
      session.status == "unauthenticated" &&
      protectedRoutes.includes(pathname)
    ) {
      router.push("/");
      return;
    }
  }, [pathname, session.status]);
  if (pathname !== "/" && protectedRoutes.includes(pathname))
    return <AppShell navbar={<Navbar />}>{children}</AppShell>;
  return <>{children}</>;
};

export default AuthContextProvider;
