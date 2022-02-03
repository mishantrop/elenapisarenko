export default function Footer() {
    const year = (new Date()).getFullYear()

    return (
        <footer>
            <div className="py-6 bg-slate-800">
                <div className="text-center text-lg text-white bg-slate-800">
                    <span>&copy; {year}</span>
                </div>
                <div className="text-center text-lg text-white bg-slate-800">
                    <a href="https://quasi-art.ru/" rel="noreferrer noopener" target="_blank">Создание сайта</a>
                </div>
            </div>
        </footer>
    )
}
