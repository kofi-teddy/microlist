import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Link from "next/link"

export default function Home() {
  return (
    <>
    <Head>
      <title>Micro List | Home</title>
      <meta name="keywords" content="micro"/>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        lorem ipsum dolor sit am
      </p> 
      <Link href="/micro"><a className={styles.btn}>See Micro Listings</a></Link> 
    </div>
    </>
  )
}
 