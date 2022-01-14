/* eslint-disable @next/next/no-img-element */
// import { GetStaticProps } from 'next'
import Head from 'next/head'

// import { getSortedPostsData } from '../lib/posts'
// import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import { getWorks } from '../lib/works'
import utilStyles from '../styles/utils.module.css'

export default function Home({ allPostsData }) {
  const works = getWorks()

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <button className="mr-1 p-2 pl-5 pr-5 bg-transparent border-2 border-blue-500 text-blue-500 text-md rounded-md hover:bg-blue-500 hover:text-gray-100 focus:border-2 focus:border-blue-300">Primary</button>
      <button className="mr-1 p-2 pl-5 pr-5 bg-transparent border-2 border-gray-500 text-gray-500 text-md rounded-md hover:bg-gray-500 hover:text-gray-100 focus:border-2 focus:border-gray-300">Secondary</button>

      <section className="p-24 flex flex-wrap items-center justify-center">
          {works.map((work) => (
            <div  key={work.id} className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
              <div className="relative pt-10 px-10 flex items-center justify-center">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
                <img className="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt="" />
              </div>
              <div className="relative text-white px-6 pb-6 mt-6">
                <span className="block opacity-75 -mb-1">Outdoor</span>
                <div className="flex justify-between">
                  <span className="block font-semibold text-xl">    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
      <div className="relative pt-10 px-10 flex items-center justify-center">
        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
        <img className="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt="" />
      </div>
      <div className="relative text-white px-6 pb-6 mt-6">
        <span className="block opacity-75 -mb-1">Масло</span>
        <div className="flex justify-between">
          <span className="block font-semibold text-xl">Oak Tree</span>
          <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$68.50</span>
        </div>
      </div>
    </div></span>
                  <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$68.50</span>
                </div>
              </div>
            </div>
          ))}
      </section>
    </Layout>
  )
}

/**
 * If you export an async function called getStaticProps from a page,
 * Next.js will pre-render this page at build time using the props returned by getStaticProps
 */
// export const getStaticProps: GetStaticProps = async (context) => {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }
