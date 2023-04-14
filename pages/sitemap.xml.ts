import { fetchWorksData } from '@root/lib/works'

const Sitemap = () => {}

const getSitemapWrapperTemplate = (content: string) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${content}
    </urlset>
  `

type Page = {
    url: string;
    changefreq: 'never' | 'yearly' | 'monthly' | 'weekly' | 'daily' | 'hourly' | 'always';
    priority: '1.0';
}

export const getServerSideProps = async ({ res }) => {
    const baseUrl = {
        development: 'http://localhost:3000',
        production: 'https://elenapisarenko.ru',
    }[process.env.NODE_ENV]
    const pagesInfo: Page[] = []

    const works = await fetchWorksData()
    for (let i = 0; i < works.length; i += 1) {
        pagesInfo.push({
            url: `${baseUrl}/works/${works[i].id}`,
            priority: '1.0',
            changefreq: 'monthly',
        })
    }

    const rows = pagesInfo
        .map((pageInfo) => `
            <url>
                <loc>${pageInfo.url}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>${pageInfo.changefreq}</changefreq>
                <priority>${pageInfo.priority}</priority>
            </url>
        `)
        .join('')

    res.setHeader('Content-Type', 'text/xml')
    res.write(getSitemapWrapperTemplate(rows))
    res.end()

    return {
        props: {},
    }
}

export default Sitemap
