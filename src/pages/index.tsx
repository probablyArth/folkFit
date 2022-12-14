import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button, Stack, Loader } from "@mantine/core";
import Head from "next/head";
import Logo from "../components/Logo";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const session = useSession();
  const router = useRouter();
  return (
    <>
      <Head>
        <title>FolkFit</title>
        <meta name="description" content="where healthy minds connect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack align={"center"}>
        <div className="flex gap-12">
          <Logo />
          <img
            src="/assets/SVGs/biker.svg"
            alt="biker"
            className="hidden w-28 md:block lg:w-36 xl:w-48"
          />
        </div>
        <p className="text-centertext-3xl md:text-6xl lg:text-7xl xl:text-8xl">
          where healthy minds connect
        </p>
        {session.status == "authenticated" && (
          <div className="flex gap-8">
            <Button
              variant="white"
              size="lg"
              onClick={() => {
                signOut();
              }}
            >
              Sign out
            </Button>
            <Button
              size="lg"
              variant="gradient"
              onClick={() => {
                router.push("/feed");
              }}
            >
              Go to the main app
            </Button>
          </div>
        )}
        {session.status == "unauthenticated" && (
          <Button
            size="lg"
            onClick={() => {
              signIn();
            }}
          >
            Login
          </Button>
        )}
        {session.status == "loading" && <Loader />}
      </Stack>
    </>
  );
};

export default Home;
