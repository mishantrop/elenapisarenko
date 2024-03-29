/* eslint-disable react/no-danger */
/* eslint-disable import/extensions */
import classnames from 'classnames'
import Image from 'next/image'

import Contacts from './contacts'

import styles from './sidebar.module.css'

export default function Sidebar() {
    const bio = {
        fio: 'Елена Писаренко',
        status: 'Пишу картины на заказ: масло, акрил&nbsp;и&nbsp;другие&nbsp;техники',
        location: 'Россия, Рыбинск',
    }

    return (
        <div className={classnames('text-center', styles.sidebar)}>
            <Image
                alt=""
                className={classnames('w-20', 'h-20', 'object-cover', 'rounded-full', 'mx-auto', 'shadow-md')}
                height={110}
                priority
                role="presentation"
                src="/images/profile.jpg"
                width={110}
            />
            <div className="capitalize text-xl mb-1 dark:text-gray-200">
                {bio.fio}
            </div>
            <div
                className="mb-4 text-sm text-gray-500 dark:text-gray-400"
                dangerouslySetInnerHTML={{
                    __html: bio.status,
                }}
            />
            <div className="flex flex-row mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c2.131 0 4 1.73 4 3.702 0 2.05-1.714 4.941-4 8.561-2.286-3.62-4-6.511-4-8.561 0-1.972 1.869-3.702 4-3.702zm0-2c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm4 14.5c0 .828-1.79 1.5-4 1.5s-4-.672-4-1.5 1.79-1.5 4-1.5 4 .672 4 1.5z" /></svg>
                <span className="ml-2 dark:text-gray-200">{bio.location}</span>
            </div>
            <Contacts />
        </div>
    )
}
