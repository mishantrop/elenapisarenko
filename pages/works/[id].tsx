import HomePage from '@root/pages'
import { fetchCategoriesData, fetchWorkData, fetchWorksData, Work } from '@root/lib/works'
import { GetStaticProps } from 'next'

export default function WorkPage({
    allCategoriesData,
    allWorksData,
    initialWork,
}) {
    return (
        <HomePage
            allCategoriesData={allCategoriesData}
            allWorksData={allWorksData}
            initialWork={initialWork}
        />
    )
}

// Return a list of possible value for id
export async function getStaticPaths() {
    const works = await fetchWorksData()

    const paths = works.map((work) => ({
        params: {
            id: work.id.toString(),
        }
    }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const allWorksData = await fetchWorksData()
    const allCategoriesData = await fetchCategoriesData()
    const initialWork: Work = await fetchWorkData(Number(context.params.id))

    return {
      props: {
        initialWork,
        allWorksData,
        allCategoriesData,
      }
    }
  }
