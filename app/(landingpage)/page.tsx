import Head from 'next/head'
import Hero from './components/Hero'
import Services from './components/Services'
import Get from './components/Get'
import Sanitizing from './components/Sanitizing'
import Happy from './components/Happy'
import Contact from './components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Clean official website</title>
        <meta property="og:title" content="Clean official website" key="title" />
      </Head>
      <Hero />
      <Services />
      <Get />
      <Sanitizing />
      <Happy />
      <Contact />
    </div>
  )
}
