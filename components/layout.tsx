import Head from 'next/head'

import Sidebar from './sidebar'
import style from './layout.module.css'

const name = 'Your Name'
export const siteTitle = 'Художник Елена'

interface Props {
  children: any;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="TODO Купить картину блабла"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <section className={style.aloha}>
        &nbsp;
      </section>

      <section className="-mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <section className="md:w-1/2 lg:w-1/2 xl:w-1/2 sticky top-0 bg-white text-center p-4 rounded-md shadow-lg max-w-xs mx-auto">
              <Sidebar />
            </section>
            <main className="md:w-1/2 lg:w-1/2 xl:w-1/2 mt-16 pl-4">
              {children}
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}
