import Head from 'next/head'

import Sidebar from './sidebar'

const name = 'Your Name'
export const siteTitle = 'Художник Елена'

interface Props {
  children: any;
  home?: Boolean;
}

export default function Layout({ children, home }: Props) {
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
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4">
          <section className="bg-white text-center p-4 rounded-md shadow-lg max-w-xs mx-auto">
            <Sidebar />
          </section>
          <main>
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
