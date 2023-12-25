'use client'
import Head from 'next/head'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import ReactGA from "react-ga"
import "@/src/app/scss/index.scss"
import { useEffect } from 'react'
export default function Home() {
 console.log(process.env.googleAnalyticsID)
  useEffect(() => {
    ReactGA.initialize(process.env.googleAnalyticsID || '');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div>
      <Head>
        
        <title>My personal dump</title>
        <meta name='description' content='Criado para exclusivamente meu uso pessoal' />
        <link rel='icon' href='@/src/app/favicon.ico' />
      </Head>
      <Navbar/>
      <Hero/>
      
    </div>
  )
}
