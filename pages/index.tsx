/* eslint-disable @next/next/no-img-element */
// import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import classnames from 'classnames'

// import { getSortedPostsData } from '../lib/posts'
// import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import { getWorks, getCategories, Category } from '../lib/works'

// export default function Home({ allPostsData }) {
export default function Home() {
  const ALL_WORKS_CATEGORY_ID = -1
  const allCategories: Array<Category> = [ ...[{ id: ALL_WORKS_CATEGORY_ID, title: 'Все работы' }], ...getCategories() ]

  const [ filteredWorks, setFilteredWorks ] = useState(getWorks())
  const [ selectedCategoryId, setSelectedCategoryId ] = useState(ALL_WORKS_CATEGORY_ID)

  useEffect(() => {
    setFilteredWorks(getWorks().filter((work) => {
      return selectedCategoryId === ALL_WORKS_CATEGORY_ID || work.categoryId === selectedCategoryId
    }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategoryId])

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <div className="pt-4 pb-4">
        {allCategories.map((category) => (
          <button
            key={category.id}
            className={classnames({
              'mr-1': true,
              'mb-1': true,
              'p-1': true,
              'pl-2': true,
              'pr-2': true,
              'bg-blue-500': category.id === selectedCategoryId,
              'bg-transparent': category.id !== selectedCategoryId,
              'border-2': true,
              'border-blue-500': true,
              'text-gray-100': category.id === selectedCategoryId,
              'text-blue-500': category.id !== selectedCategoryId,
              'text-md': true,
              'rounded-md': true,
              'hover:bg-blue-500': true,
              'hover:text-gray-100': true,
              'focus:border-2': true,
              'focus:border-blue-300': true,
            })}
            onClick={() => {
              setSelectedCategoryId(category.id)
            }}
          >
            {category.title}
          </button>
        ))}
      </div>

      <section className="grid grid-flow-row-dense grid-cols-2 gap-3 justify-between sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
          {filteredWorks.map((work) => (
            <div key={work.id}>
              <img
                className="border border-yellow-700 mb-1 border-solid w-full hover:border-yellow-500"
                alt="Best seller" 
                src={`images/works/${work.src}`}
                loading="lazy"
              />
              <h2 className="pt-2 m-0 leading-4 font-semibold">Indoor light 2021 USA</h2>
              <p>$210</p>
              <p className="text-green-500 italic font-medium">In Stock</p>
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
