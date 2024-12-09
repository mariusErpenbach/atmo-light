import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function NextPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Next - Nextron (basic-lang-javascript)</title>
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ - <Link href="/home">Go to home page</Link>
        </p>
        <p> Color detector mode <Link href="/colorDetectorMode">Go to color detector mode</Link></p>
      </div>
    </React.Fragment>
  )
}