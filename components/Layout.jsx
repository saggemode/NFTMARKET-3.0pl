import Head from 'next/head'
import React from 'react'
import Header from './Header'

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " - NFT Store" : "NFT Store"}</title>
        {description && <meta name="description" content={description}></meta>}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <div className="flex min-h-screen flex-col justify-between  ">
        <div className=" top-0 z-40">
          {/* <div className='sticky top-0 z-40'> */}
          <Header />
        </div>

       
        <main className="container m-auto mt-4 px-4">{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default Layout