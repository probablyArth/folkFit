import React from "react";
import { signOut, useSession } from "next-auth/react";

const dashboard = () => {
  const { data: session } = useSession();

  return (
    <>
      <button
        onClick={() => {
          signOut();
        }}
      >
        Logout
      </button>
      {session?.user?.id} dashbaord
    </>
  );
};

export default dashboard;
