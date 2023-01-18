import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            On{' '}
            <Image
              src="/sui.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={44}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/ka.svg"
          alt="Next.js Logo"
          width={220}
          height={67}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/fire.svg" alt="133" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://github.com/kaswap"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Github <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Build the next web
          </p>
        </a>

        <a
          href="https://discord.gg/teBfRUPu4F"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Discord <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore with friends</p>
        </a>

        <a
          href="https://twitter.com/KaswapExchange"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Twitter <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Share your love
          </p>
        </a>
      </div>
    </main>
  )
}
