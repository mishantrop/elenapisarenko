import classnames from 'classnames'

import styles from './contacts.module.css'

export default function Contacts() {
    const instagram = 'https://www.instagram.com/elena.pisarenko.754/'
    const vk = 'https://vk.com/public109473289'
    const email = 'pisarenkoelen4@yandex.ru'
    const phone = '+7 (930) 104-40-60'
    const phoneHref = phone
        .replace('(', '')
        .replace(')', '')
        .replace('+7', '8')
        .replaceAll(' ', '')
        .replaceAll('-', '')

    return (
        <div className={classnames('text-center', styles.contacts)}>
            <a href={vk} rel="noreferrer noopener" target="_blank" className="flex flex-row mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.581 15.997c.304 0 .429-.204.425-.458-.016-.958.356-1.474 1.03-.802.744.744.896 1.26 1.801 1.26h1.601c.403 0 .562-.13.562-.334 0-.432-.711-1.194-1.312-1.752-.844-.783-.882-.802-.156-1.744.9-1.169 2.079-2.667 1.037-2.667h-1.991c-.387 0-.414.217-.551.542-.498 1.173-1.443 2.693-1.803 2.461-.377-.243-.204-1.203-.175-2.63.008-.377.006-.636-.571-.77-.314-.073-.621-.103-.903-.103-1.137 0-1.922.477-1.477.56.785.146.711 1.846.527 2.58-.319 1.278-1.518-1.012-2.018-2.152-.12-.275-.155-.488-.586-.488h-1.627c-.247 0-.394.08-.394.258 0 .301 1.479 3.36 2.892 4.885 1.379 1.487 2.742 1.354 3.689 1.354z" /></svg>
                <span className="ml-2 dark:text-gray-200">VK</span>
            </a>
            <a href={`tel:${phoneHref}`} className="flex flex-row mb-4">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 27.442 27.442"><g><path d="M19.494,0H7.948C6.843,0,5.951,0.896,5.951,1.999v23.446c0,1.102,0.892,1.997,1.997,1.997h11.546 c1.103,0,1.997-0.895,1.997-1.997V1.999C21.491,0.896,20.597,0,19.494,0z M10.872,1.214h5.7c0.144,0,0.261,0.215,0.261,0.481 s-0.117,0.482-0.261,0.482h-5.7c-0.145,0-0.26-0.216-0.26-0.482C10.612,1.429,10.727,1.214,10.872,1.214z M13.722,25.469 c-0.703,0-1.275-0.572-1.275-1.276s0.572-1.274,1.275-1.274c0.701,0,1.273,0.57,1.273,1.274S14.423,25.469,13.722,25.469z M19.995,21.1H7.448V3.373h12.547V21.1z" /></g></svg>
                <span className="ml-2 dark:text-gray-200">{phone}</span>
            </a>
            <a href={`mailto:${email}`} className="flex flex-row mb-4">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 493.497 493.497"><path d="M444.556,85.218H48.942C21.954,85.218,0,107.171,0,134.16v225.177c0,26.988,21.954,48.942,48.942,48.942h395.613 c26.988,0,48.941-21.954,48.941-48.942V134.16C493.497,107.171,471.544,85.218,444.556,85.218z M460.87,134.16v225.177 c0,2.574-0.725,4.924-1.793,7.09L343.74,251.081l117.097-117.097C460.837,134.049,460.87,134.096,460.87,134.16z M32.628,359.336 V134.16c0-0.064,0.033-0.11,0.033-0.175l117.097,117.097L34.413,366.426C33.353,364.26,32.628,361.911,32.628,359.336z M251.784,296.902c-2.692,2.691-7.378,2.691-10.07,0L62.667,117.846h368.172L251.784,296.902z M172.827,274.152l45.818,45.819 c7.512,7.511,17.493,11.645,28.104,11.645c10.61,0,20.592-4.134,28.104-11.645l45.82-45.819l101.49,101.499H71.327L172.827,274.152z" /></svg>
                <span className="ml-2 dark:text-gray-200">{email}</span>
            </a>
            <a href={instagram} rel="noreferrer noopener" target="_blank" className="flex flex-row mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                <span className="ml-2 dark:text-gray-200">Instagram</span>
            </a>
        </div>
    )
}
