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
        <div className="fixed inset-0 bg-gray-500/75 z-50 p-0 md:p-8 lg:p-12">
            <div className="relative inset-0 bg-white h-full flex p-8 md:p-16 md:rounded-xl opacity-90 dark:bg-gray-900">
                <button
                    aria-label="close"
                    className="
                        flex
                        absolute top-0 left-0
                        text-xl text-black my-2 mx-4 dark:text-gray-200
                    "
                    type="button"
                    onClick={onClose}
                >
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
                        <g>
                            <path className="fill-black dark:fill-white" d="M20,25a1,1,0,0,1-.71-.29l-8-8a1,1,0,0,1,0-1.42l8-8a1,1,0,1,1,1.42,1.42L13.41,16l7.3,7.29a1,1,0,0,1,0,1.42A1,1,0,0,1,20,25Z" />
                        </g>
                    </svg>
                    назад
                </button>
                <div className="md:flex w-full">
                    <div
                        className="
                            h-auto
                            flex-none md:w-1/2 lg:w-1/2 xl:w-3/4
                            bg-top
                            mt-4
                            aspect-square
                        "
                        style={{
                            backgroundImage: `url('${work.src}')`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        &nbsp;
                    </div>
                    <div className="flex-none md:w-1/2 lg:w-1/2 xl:w-1/4 pl-0 md:pl-16">
                        <h1 className="mt-4 md:mb-8 dark:text-gray-200">{work.title}</h1>

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
