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
      <main>
        <section className={styles.head}>
          <div>
            <Link href='https://wwit.netlify.app'>
              <img
                src='favicon.ico'
                alt='WWiT'
                width={150}
              />
            </Link>
          </div>
        </section>
        <section className={styles.card}>
          <h3 className={styles.project}>Projects</h3>
          <div>
            {projects.map((project) => {
              const { id, name, description, url, type, image } = project;
              return (
                <article
                  key={id}
                  className={styles.card}
                >
                  <div>
                    <Link href={url}>
                      <h5>{name}</h5>
                      <p className={styles.desc}>{description}</p>
                      <p>{url}</p>
                      <p>{type}</p>
                      <img
                        src={image}
                        alt={name}
                        width={100}
                      />
                    </Link>
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
