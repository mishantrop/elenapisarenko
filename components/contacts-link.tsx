import React from 'react'

type Props = {
    href: string;
    icon: React.ReactNode;
    text: string;
}

export default function ContactsLink({
    href,
    icon,
    text,
}: Props) {
    return (
        <a
            rel="noreferrer noopener"
            target="_blank"
            className="flex flex-row mb-4 text-gray-900 dark:text-gray-200 hover:text-rose-400"
            href={href}
        >
            {icon}
            <span className="ml-2">{text}</span>
        </a>
    )
}
