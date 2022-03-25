import Head from 'next/head'

import styles from '../styles/Home.module.css'
import { Icon } from '@iconify/react'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IGOR - R.U.A</title>
        <meta name="description" content="Grafite de Manaus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img className={styles.duascabecas} src="duascabecasigor.png" />
        <img className={styles.profile} src="profile.png" />

        <h1 className={styles.barrio}>IGOR</h1>

        <ul>
          <li>
            <Icon icon="la:instagram" />
          </li>
          <li>
            <Icon icon="la:whatsapp" />
          </li>
          <li>
            <Icon icon="la:youtube" />
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <span className={styles.barrio}>
          <h2>R.U.A</h2>
        </span>
      </footer>
    </div>
  )
}
