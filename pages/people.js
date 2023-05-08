// import PeopleHead from '@/components/thepeople'
const PeopleHead = dynamic(() => import("@/components/thepeople"), { ssr: false })
import Head from 'next/head'
import React from 'react'

const People = () => {
    return (
        <>
            <Head>
                <title>The People | Alpha Squad</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <PeopleHead/>
        </>
    )
}

export default People