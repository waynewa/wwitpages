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
          <p>
            Main page that is being generated for the all the WWiT packages deployed 
            </p>
        </div>
      </main>
    </>
  )
}
