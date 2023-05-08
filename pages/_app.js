import Layout from '@/components/layout'
import '@/styles/globals.css'
import Head from 'next/head'
import React from 'react'

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Alpha Squad</title>
      </Head>
      <div className="scroll bg-black scroll-smooth">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </React.Fragment>
  )
}
