import Head from 'next/head'
import Image from 'next/image'
import duascabecasigor from '../public/duascabecasigor.png'
import profile from '../public/profile.png'
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

     
        <Image
          
          src={duascabecasigor}
          alt="Banner_Igor"
        />
      
       <div className={styles.prof} >
        <Image className={styles.profile} src={profile} alt="profile" />

        </div>

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
