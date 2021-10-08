import type { FC } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Logo from '../assets/lbc-logo.webp'
import styles from '../styles/Home.module.css'
import ConversationsList from '../pages/ConversationsList/ConversationsList';

const Home: FC = () => {
  const year = new Date().getFullYear()
  return (
    <div>
      <Head>
        <title>Frontend Technical test - Leboncoin</title>
        <meta name="description" content="Frontend exercise for developpers who want to join us on leboncoin.fr"></meta>
      </Head> 
      <ConversationsList />

      <footer className={styles.footer}>
        &copy; leboncoin Frontend Test - {year}
      </footer>
    </div>
  )
}

export default Home

