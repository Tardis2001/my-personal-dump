import Head from 'next/head'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import "@/src/app/scss/index.scss"
import { GoogleAnalytics } from "nextjs-google-analytics";
import Script from 'next/script'
export default function Home() {
 
  return (
    <div>
      <Head>
        
      <GoogleAnalytics trackPageViews />
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script>
        <title>My personal dump</title>
        <meta name='description' content='Criado para exclusivamente meu uso pessoal' />
        <link rel='icon' href='@/src/app/favicon.ico' />
      </Head>
      <Navbar/>
      <Hero/>
      
    </div>
  )
}
