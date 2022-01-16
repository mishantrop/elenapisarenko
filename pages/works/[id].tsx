import Head from 'next/head'

import Home from '@root/pages'
// import { getAllPostIds, getPostData } from '../../lib/posts'
import { getWorks } from '@root/lib/works'

export default function Work({ initialWork }) {
    return (
        <Home initialWork={initialWork} />
    )
}

// Return a list of possible value for id
export async function getStaticPaths() {
    const works = getWorks()
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

// Fetch necessary data for the blog post using params.id
export async function getStaticProps({ params }) {
    const works = getWorks()
    const initialWork = works.find((work) => work.id === Number(params.id))

    return {
        props: {
            initialWork,
        },
    }
}
