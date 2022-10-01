import "../styles/globals.css";
import type { AppType } from "next/app";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { createEmotionCache, MantineProvider } from "@mantine/core";
import AuthContextProvider from "../contexts/AuthContext";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const cache = createEmotionCache({ key: "mantine", prepend: true });
  return (
    <SessionProvider session={session}>
      <MantineProvider
        emotionCache={cache}
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
          fontFamily: "Poppins, sans-serif",
          defaultRadius: "md",
          colors: {
            brand: [
              "#EBEEF8",
              "#C6CFF2",
              "#9DAFF3",
              "#5C7BEB",
              "#506DD6",
              "#4762C1",
              "#485CA7",
              "#49588D",
              "#485379",
              "#6E8DFD",
            ],
          },
          primaryColor: "brand",
        }}
      >
        <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
      </MantineProvider>
    </SessionProvider>
  );
};

export default MyApp;
