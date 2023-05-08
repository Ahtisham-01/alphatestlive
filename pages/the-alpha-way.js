// import AlphaWayHeader from "@/components/alphaway"
import dynamic from "next/dynamic"
const AlphaWayHeader =dynamic(() => import("@/components/alphaway"), { ssr: false })
import PartnersNotClients from "@/components/alphaway/PartnersNotClients"
import Head from "next/head"
export default function Home() {
    return (
        <>
            <Head>
                <title>The Alpha Way | Alpha Squad</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <AlphaWayHeader />
            <PartnersNotClients />
        </>
    )
}
