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
        document.querySelector('body').classList.add('overflow-hidden')

        return () => {
            document.removeEventListener('keydown', handleKeydown)
            document.querySelector("body").classList.remove("overflow-hidden")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="fixed inset-0 bg-gray-500/75 z-50 p-4">
            <div className="relative inset-0 bg-white h-full flex p-16">
                <button
					v-if="showClose"
					aria-label="close"
					className="absolute top-0 left-0 text-xl text-black my-2 mx-4"
                    onClick={onClose}
				>
					× закрыть
				</button>
				<div className="md:flex w-full">
                    <div
                        className="md:w-1/2 lg:w-1/2 xl:w-3/4"
                        style={{
                            backgroundImage: `url("/images/works/${work.src}")`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    >
                        &nbsp;
                    </div>
                    <div className="md:w-1/2 lg:w-1/2 xl:w-1/4 pl-16">
                        {work.title}
                    </div>
                </div>
            </div>
        </div>
    )
}