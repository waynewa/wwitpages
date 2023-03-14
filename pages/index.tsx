import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import projects from '../assets/data/data';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>WWiT Pages</title>
      </Head>
      <main >
      <section className={styles.center}>
      <div className={styles.card}>
       <Link href="https://wwit.netlify.app"> <img src="favicon.ico" alt="WWiT" />
        <h3 >Projects</h3>
        </Link>
      </div>
      </section>
      <section className={styles.card}>
        <div>
          {projects.map((project) => {
            const { id, name, description, url, type, image } = project;
            return (
              <article key={id} className={styles.card}>
                <div>
                  <h5>{name}</h5>
                  <p>{description}</p>
                  <p>
                    <Link href={url}>{url}</Link>
                  </p>
                  <p>{type}</p>
                  <img src={image} alt={name} width={100} />
                </div>
              </article>
            );
          })}
        </div>
        </section>
      </main>
    </>
  );
}
