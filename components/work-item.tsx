import { SyntheticEvent } from 'react'
import classnames from 'classnames'

import { Work } from '@root/lib/works'

import style from './work-item.module.css'

type Props = {
    work: Work;
    onSelect: (work: Work) => void;
}

export default function WorkItem({ work, onSelect }: Props) {
    const onClick = (event: SyntheticEvent) => {
        event.preventDefault()
        onSelect(work)
    }

    return (
        <a className={classnames(style['work-item'], 'rounded-md', 'overflow-hidden')} onClick={onClick}>
            <div className={style['work-item__image']} style={{ backgroundImage: `url('images/works/${work.src}')` }}>
            </div>
        </a>
    )
}