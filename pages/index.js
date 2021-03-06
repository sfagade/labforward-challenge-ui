import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import NotebookSearch from '../components/notebookSearch';
import {frequencyCheck} from '../actions';

export default function Home() {
  
  const [frequence, setFrequency] = useState(null);
  
  const handleFormSubmit = (noteForm) => {
    if(noteForm.searchWord === "" || noteForm.notebookWord === "") {
      setFrequency("Both fields are required!");
      return;
    }
    frequencyCheck(noteForm).then((result) => {
      setFrequency(`Frequency is: ${result.frequency}`);
    });
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>LadForward Challenge</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>

      <main className={styles.main}>
        <div>{frequence}</div>
        <NotebookSearch handleFormSubmit={handleFormSubmit} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
