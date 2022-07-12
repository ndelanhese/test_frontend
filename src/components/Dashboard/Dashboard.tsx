import { Flex, Stack } from "@chakra-ui/react";
import { Header } from "../Header/Header";
import { Profile } from "../Profile/Profile";
import { Sidebar } from "../Sidebar/Sidebar";


export function Dashboard(){
    return(
        <>
        <Header/>
        <Sidebar/>
        <Stack alignItems="center" mt="6.25rem">
        <Profile/>
        </Stack>
        </>
    )
}