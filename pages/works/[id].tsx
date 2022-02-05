import HomePage from '@root/pages'
import { fetchWorkData, fetchWorksData, Work } from '@root/lib/works'

export default function WorkPage({ initialWork }) {
    return (
        <HomePage initialWork={initialWork} />
    )
}

// Return a list of possible value for id
export async function getStaticPaths() {
    const works = await fetchWorksData();

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

export async function getStaticProps({ params }) {
    const workData: Work = await fetchWorkData(params.id)

    return {
      props: {
        workData,
      }
    }
  }
