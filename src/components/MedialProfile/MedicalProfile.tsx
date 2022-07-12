import { Stack } from "@chakra-ui/react";
import { Header } from "../Header/Header";
import { Profile } from "../Profile/Profile";
import { Sidebar } from "../Sidebar/Sidebar";

export function MediacalProfile() {
  return (
    <>
      <Header />
      <Sidebar />
      <Stack alignItems="center" mt={["3.5rem", "5.25rem"]}>
        <Profile />
      </Stack>
    </>
  );
}
