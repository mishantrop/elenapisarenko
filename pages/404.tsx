/* eslint-disable import/extensions */
import Link from 'next/link'

import Layout from '../components/layout'

export default function Custom404() {
    return (
        <Layout>
            <h1 className="dark:text-gray-200 text-2xl mt-4 mb-4">404 - Страница не найдена</h1>

            <p>
                <Link
                    href="/"
                    className="text-center text-lg text-gray-900 dark:text-gray-200 hover:text-rose-400 rounded-md dark:bg-gray-800 p-4 inline-block"
                >
                    Перейти на главную
                </Link>
            </p>
        </Layout>
    )
}
