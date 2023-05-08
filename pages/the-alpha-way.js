// import AlphaWayHeader from "@/components/alphaway"
const AlphaWayHeader =dynamic(() => import("@/components/alphaway"), { ssr: false })
import PartnersNotClients from "@/components/alphaway/PartnersNotClients"
import dynamic from "next/dynamic"
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
