import { Flex, Stack, useBreakpointValue } from "@chakra-ui/react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Links } from "../Links/Links";
import { Newsletter } from "../Newsletter/Newsletter";
import { Profile } from "../Profile/Profile";
import { Sidebar } from "../Sidebar/Sidebar";

export function Dashboard() {
  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <>
      <Header />
      <Sidebar />
      <Stack alignItems="center" mt="6.25rem">
        <Profile />
      </Stack>
      <Stack alignItems="center" mt="2.5rem" mb="2.5rem">
        <Links />
      </Stack>
      {!isWideVersion && (
        <Stack alignItems="center" mt="2.5rem" mb="2.5rem">
          <Newsletter/>
        </Stack>
      )}
      {!isWideVersion ? (
        <Stack alignItems="center" mt="2.5rem" mb="3rem" >
        <Footer/>
      </Stack>
      ): <Stack alignItems="center" mt="7rem" mb="3rem">
        
        <Footer/>
      
      </Stack>}
    </>
  );
}
