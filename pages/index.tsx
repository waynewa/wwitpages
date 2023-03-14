import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>WWiT Pages</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>WWiT Pages</h1>


          <p> The purpose of this page is to showcase the various aspects of development and test automation that have been undertaken by the WWiT team. The listed repositories have been created and are currently being maintained by the WWiT developer.
            For additional information about WWiT, please visit their website at https://wwit.netlify.app.
          </p>
          <h3>Test Automation projects</h3>
          <ul>
            <li >
              WWiTSeleniumBase - This project is a C# based selenium framework - https://github.com/waynewa/WWiTSeleniumBase

            </li>

            <li>
              WWiTSeleniumJ - This project is a Java based selenium framework - https://github.com/waynewa/WWiTSeleniumJ
            </li>
          </ul>
          <h3>Development Projects</h3>
          <ul>
            <li >WWiT WebSite - This project is linked to the WWiT Website - https://github.com/waynewa/wwit</li></ul>
        </div>
      </main>
    </>
  )
}
