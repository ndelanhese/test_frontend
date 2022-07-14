import Head from "next/head";
import { MediacalProfile } from "../../components/MedicalProfile/MedicalProfile";

export default function medicalProfile(){
    return (
        <>
        <Head>
    <title>e-code | medical profile</title>
    </Head>
        <MediacalProfile/>
        </>
    )
}