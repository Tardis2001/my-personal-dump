'use client'
import Head from 'next/head'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import ReactGA from "react-ga"
import "@/src/app/scss/index.scss"
import { useEffect } from 'react'
export default function Home() {
  
  useEffect(() => {
    if(process.env.googleAnalyticsID && process.env.NODE_ENV === "production") { // Checks for GA ID and only turns on GA in production
      ReactGA.initialize(process.env.googleAnalyticsID);
      ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
    }
  });
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
