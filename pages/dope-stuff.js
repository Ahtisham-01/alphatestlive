import DopeStuff from "@/components/dopestuff"
import Head from "next/head"
export default function Home() {
    return (
        <>
            <Head>
                <title>Dope Stuff | Alpha Squad</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <DopeStuff />
        </>
    )
}
