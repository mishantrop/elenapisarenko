import Sidebar from './sidebar'
import style from './layout.module.css'

interface Props {
  children: any;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <section className={style.aloha}>
        &nbsp;
      </section>

      <section className="-mt-16 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="md:flex md:place-items-start">
            <section
              className="relative md:w-1/2 lg:w-1/2 xl:w-1/4 bg-white mb-16 p-4 rounded-md shadow-lg max-w-xs mx-auto dark:bg-gray-800"
            >
              <Sidebar />
            </section>
            <main className="md:w-1/2 lg:w-1/2 xl:w-3/4 mt-16 mb-16 pl-16">
              {children}
            </main>
          </div>
        </div>
      </section>

      <footer>
        <div className="py-6 bg-slate-800">
          <div className="text-center text-lg text-white bg-slate-800">
            <span>&copy; 2022</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
