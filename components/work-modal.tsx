/* eslint-disable @next/next/no-img-element */

import { Work } from '@root/lib/works'
import { useEffect } from 'react';

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

        return () => {
            document.removeEventListener('keydown', handleKeydown)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="bg-gray-900 main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
            <div className="mx-auto z-50 overflow-y-auto">
                <div className="py-4 text-left px-6">
                    <div className="flex justify-between items-center pb-3">
                        <button onClick={onClose} className="modal-close cursor-pointer z-51">
                            <svg className="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                            viewBox="0 0 18 18">
                                <path
                                    d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div className="my-5 mr-5 ml-5 flex justify-center">
                        <div className="">
                            <img
                                src={`images/works/${work.src}`}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="my-5 mr-5 ml-5 flex justify-center">
                        {work.title}
                    </div>
                </div>
            </div>
        </div>
    )
}