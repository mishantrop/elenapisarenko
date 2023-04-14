/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { SyntheticEvent } from 'react'
import classnames from 'classnames'

import { Work } from '@root/lib/works'

import style from './work-item.module.css'

type Props = {
    work: Work;
    // eslint-disable-next-line no-unused-vars
    onSelect: (work: Work) => void;
}

export default function WorkItem({ work, onSelect }: Props) {
    const onClick = (event: SyntheticEvent) => {
        event.preventDefault()
        onSelect(work)
    }

    return (
        <a
            href={`/works/${work.id}`}
            className={classnames(style['work-item'], 'rounded-md', 'overflow-hidden')}
            onClick={onClick}
        >
            <div
                className={style['work-item__image']}
                style={{
                    backgroundImage: `url('${work.thumb}')`,
                }}
            />
        </a>
    )
}
