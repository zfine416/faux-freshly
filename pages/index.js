import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
// import graphql query here


export default function Home() {

  useEffect(() => {
    // use axios, urql or fetch here to retrieve data
  }, [])
  return (
    <div className={styles.container}>
      <h1>Howdie</h1>
    </div>
  )
}
