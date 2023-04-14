/* eslint-disable react/jsx-props-no-spreading */
import 'core-js/es'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp
