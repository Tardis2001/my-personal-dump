import Head from 'next/head'
import Navbar from './sections/Navbar'
// import About from './About'
import Hero from './sections/Hero'
import "@/src/app/scss/index.scss"
import Canvas from './sections/Canvas'
export default function Home() {
  return (
    <div>
      <Head>
        
        <title>My personal dump</title>
        <meta name='description' content='Created in next.js' />
        <link rel='icon' href='@/src/app/favicon.ico' />
      </Head>
      <Navbar/>
      <Hero/>
      {/* <Canvas/> */}
      
    </div>
  )
}
