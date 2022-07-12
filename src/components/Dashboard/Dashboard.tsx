import { Stack } from "@chakra-ui/react";
import { Header } from "../Header/Header";
import { Links } from "../Links/Links";
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
        <Stack alignItems="center" mt="2.5rem" mb="2.5rem">
            <Links/>
        </Stack>
        </>
    )
}