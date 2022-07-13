import { Flex, Stack } from "@chakra-ui/react";
import { Header } from "../Header/Header";
import { MedicalInformations } from "../MedicalInformations/MedicalInformation";
import { Profile } from "../Profile/Profile";
import { Sidebar } from "../Sidebar/Sidebar";
import { Footer } from '../Footer/Footer';

export function MediacalProfile() {
  return (
    <>
      <Header />
      <Sidebar />
      <Stack alignItems="center" mt={["2.5rem", "3.25rem"]}>
        <Profile />
      </Stack>
      <Flex mb={["4rem","7.5rem"]}>
        <MedicalInformations />
      </Flex>
      <Stack align="center" mb="3rem">
      <Footer/>
      </Stack>
    </>
  );
}
