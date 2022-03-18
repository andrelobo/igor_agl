import Head from 'next/head'
import Image from 'next/image'
import igor1 from '../public/igor1.png'
import igor2 from '../public/igor2.png'
import profile from '../public/profile.png'

import styles from '../styles/Home.module.css'
import whatsicon from '../components/whatsicon.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IGOR - R.U.A</title>
        <meta name="description" content="Grafite de Manaus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>      

      <main className={styles.main}>
      <Image src= {igor1} widht="225px" height="270" alt="Igor1" />
      <Image src= {igor2} alt="Igor2" />

       <Image className={styles.image} src= {profile} alt="profile" />

        <h1 className={styles.barrio}>IGOR</h1>


        <ul>
        <li><a href="#">whats</a></li>
        <li><a href="#">Instgram</a></li>
        <li><a href="#">Youtube</a></li>
       
      </ul> 

          
       

        
      </main>

      <whatsicon />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <span className={styles.barrio}>
            <h2>R.U.A</h2>
          </span>
        </a>
      </footer>
    </div>
  )
}
