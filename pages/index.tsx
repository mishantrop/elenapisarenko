/* eslint-disable @next/next/no-img-element */
// import { GetStaticProps } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import { useEffect, useState } from 'react'
import classnames from 'classnames'

// import { getSortedPostsData } from '@root/lib/posts'
// import Date from '@root/components/date'
import Layout from '@root/components/layout'
import { getWorks, getCategories, Category, Work } from '@root/lib/works'
import WorkItem from '@root/components/work-item'
import WorkModal from '@root/components/work-modal'
import { useRouter } from 'next/router'

// export default function Home({ allPostsData }) {
export default function Home({ initialWork }: { initialWork: Work }) {
    const router = useRouter()

    const siteTitle = 'Художник Елена'
    const ALL_WORKS_CATEGORY_ID = -1
    const allCategories: Array<Category> = [ ...[{ id: ALL_WORKS_CATEGORY_ID, title: 'Все работы' }], ...getCategories() ]

    const [ pagetitle, setPagetitle ] = useState(siteTitle)
    const [ filteredWorks, setFilteredWorks ] = useState(getWorks())
    const [ selectedCategoryId, setSelectedCategoryId ] = useState(ALL_WORKS_CATEGORY_ID)
    const [ openedWork, setOpenedWork ] = useState<Work>()

    useEffect(() => {
        if (initialWork) {
            setPagetitle(initialWork.title)
            setOpenedWork(initialWork)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setFilteredWorks(getWorks().filter((work) => {
            return selectedCategoryId === ALL_WORKS_CATEGORY_ID || work.categoryId === selectedCategoryId
        }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCategoryId])

    const handleSelectWork = (work: Work) => {
        window.history.pushState(undefined, undefined, `/works/${work.id}`)
        setOpenedWork(work)
        setPagetitle(work.title)
    }

    const handeCloseWork = () => {
        setOpenedWork(undefined)
        setPagetitle(siteTitle)
        window.history.pushState(undefined, undefined, '/')
    }

    return (
        <Layout>
            <Head>
                <title>{pagetitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="og:title" content={pagetitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            {
                Boolean(openedWork) && (
                    <WorkModal
                        work={openedWork}
                        onClose={handeCloseWork}
                    />
                )
            }

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
                            'bg-gray-900': category.id === selectedCategoryId,
                            'bg-transparent': category.id !== selectedCategoryId,
                            'border-2': true,
                            'border-transparent': true,
                            'text-gray-100': category.id === selectedCategoryId,
                            'text-gray-900': category.id !== selectedCategoryId,
                            'dark:text-gray-500': category.id !== selectedCategoryId,
                            'text-md': true,
                            'rounded-md': true,
                            'hover:bg-gray-100': category.id !== selectedCategoryId,
                            'dark:hover:bg-gray-200': category.id !== selectedCategoryId,
                            'hover:text-gray-600': category.id !== selectedCategoryId,
                            'focus:border-2': true,
                            'focus:border-gray-900': true,
                        })}
                        onClick={() => {
                        setSelectedCategoryId(category.id)
                        }}
                    >
                        {category.title}
                    </button>
                ))}
            </div>

            {
                filteredWorks.length === 0 ? (
                    <div className="mb-4 text-center text-sm text-gray-500 dark:text-gray-400">
                        В этой категории ничего нет
                    </div>
                    )
                : (
                    <section className="grid grid-flow-row-dense justify-between    gap-8 sm:gap-3     grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                        {filteredWorks.map((work) => (
                            <WorkItem
                                key={work.id}
                                work={work}
                                onSelect={handleSelectWork}
                            />
                        ))}
                    </section>
                )
            }
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
