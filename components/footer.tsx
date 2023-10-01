/* eslint-disable react/jsx-one-expression-per-line */
export default function Footer() {
    const year = (new Date()).getFullYear()

    return (
        <footer>
            <div className="py-6 bg-slate-800 text-center">
                <span className="text-center text-lg text-white bg-slate-800">
                    &copy; 2022-{year}
                </span>
                <br />
                <a
                    href="https://quasi-art.ru/"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="text-center text-lg text-gray-900 dark:text-gray-200 hover:text-rose-400"
                >
                    Создание сайта
                </a>
            </div>
        </footer>
    )
}
