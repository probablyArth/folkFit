import { Button } from "@mantine/core";
import { signOut } from "next-auth/react";

const profile = () => {
  return (
    <div>
      <Button
        variant={"gradient"}
        gradient={{ from: "red", to: "orange", deg: 45 }}
        onClick={() => {
          signOut();
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default profile;
