import React from 'react'
import Script from 'next/script'

export default function GoogleAnalytics() {
    const counterId = 'G-GWFBSQTWMP'

    return (
        <>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${counterId}`}
            />

            <Script strategy="lazyOnload" id="google-analytics-hello-world">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag() {
                        dataLayer.push(arguments);
                    }
                    gtag('js', new Date());
                    gtag('config', '${counterId}', {
                        page_path: window.location.pathname,
                    });
                `}
            </Script>
        </>
    )
}
