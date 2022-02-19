import classnames from 'classnames'

import Sidebar from './sidebar'
import style from './layout.module.css'
import Footer from './footer'

interface Props {
  children: any;
  isBlurred?: boolean;
}

export default function Layout({ children, isBlurred }: Props) {
  return (
    <div className={classnames({ 'blur': isBlurred })}>
      <section className={classnames('h-24', style.aloha)}>
        &nbsp;
      </section>

      <section className="-mt-16 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="md:flex md:place-items-start">
            <section
              className="relative lg:w-1/3 xl:w-1/4 bg-white md:mb-16 mb-4 p-4 rounded-md shadow-lg max-w-xs mx-auto dark:bg-gray-800"
            >
              <Sidebar />
            </section>
            <main className="lg:w-2/3 xl:w-3/4 mt-4 md:mt-16 mb-16 md:pl-16">
              {children}
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
