import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';

export default function Home() {
  const [saludo, setSaludo] = useState([]);
  const fetchTodos = async () => {
    const response = await fetch('/api/hello');
    const data = await response.json();
    console.log(data);
    setSaludo(data.name);
  };
  fetchTodos();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js ! - {saludo} -</a>
        </h1>
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="blue" position={[0, 0, 5]} />
          <mesh rotation={[5, 5, 3]}>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
