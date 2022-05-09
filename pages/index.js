import { Chip } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
        <Chip label="hello" color='primary'/>
        <h1>გასდასდ</h1>
    </div>
  )
}
