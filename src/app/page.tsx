import Head from 'next/head'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import "@/src/app/scss/index.scss"
export default function Home() {
 
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
