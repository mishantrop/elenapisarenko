/* eslint-disable import/extensions */

import { Work } from '@root/lib/works'
import { useEffect } from 'react'

import Contacts from './contacts'

type Props = {
    work: Work;
    onClose: () => void;
}

export default function WorkModal({ work, onClose }: Props) {
    const handleKeydown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onClose()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeydown)
        document.querySelector('body').classList.add('overflow-hidden')

        return () => {
            document.removeEventListener('keydown', handleKeydown)
            document.querySelector('body').classList.remove('overflow-hidden')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="fixed inset-0 bg-gray-500/75 z-50 p-4">
            <div className="relative inset-0 bg-white h-full flex p-16 rounded-xl opacity-90 dark:bg-gray-900">
                <button
                    aria-label="close"
                    className="absolute top-0 left-0 text-xl text-black my-2 mx-4 dark:text-gray-200"
                    type="button"
                    onClick={onClose}
                >
                    × закрыть
                </button>
                <div className="md:flex w-full">
                    <div
                        className="md:w-1/2 lg:w-1/2 xl:w-3/4"
                        style={{
                            backgroundImage: `url('${work.src}')`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    >
                        &nbsp;
                    </div>
                    <div className="md:w-1/2 lg:w-1/2 xl:w-1/4 pl-16">
                        <h1 className="mb-8 dark:text-gray-200">{work.title}</h1>

                        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
                            Для заказа картины свяжитесь со мной удобным способом:
                        </div>

                        <Contacts />
                    </div>
                </div>
            </div>
        </div>
    )
}
