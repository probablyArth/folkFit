import { Navbar as MantineNavBar, Button, Stack } from "@mantine/core";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <MantineNavBar width={{ base: 300 }} height={"100%"} p="xs">
      <MantineNavBar.Section
        grow
        mt={"md"}
        className="flex h-full flex-col justify-center"
      >
        <Stack className="max-w-44 justify-center" p={"sm"}>
          <Button
            size={"xl"}
            variant={`${router.pathname === "/feed" ? "light" : "filled"}`}
            onClick={() => {
              router.push("/feed");
            }}
            // leftIcon={<CgFeed />}
          >
            Feed
          </Button>
          <Button
            size={"xl"}
            variant={`${router.pathname === "/chat" ? "light" : "filled"}`}
            onClick={() => {
              router.push("/chat");
            }}
            // leftIcon={<RiChat1Fill />}
          >
            Chat
          </Button>
          <Button
            size={"xl"}
            variant={`${router.pathname === "/profile" ? "light" : "filled"}`}
            onClick={() => {
              router.push("/profile");
            }}
            // leftIcon={<CgProfile />}
          >
            Profile
          </Button>
          <Button
            size={"xl"}
            variant="gradient"
            // leftIcon={<IoCreateOutline />}
            // onClick={() => setCreatePostModalOpened(true)}
          >
            Create Post
          </Button>
        </Stack>
      </MantineNavBar.Section>
    </MantineNavBar>
  );
};

export default Navbar;
