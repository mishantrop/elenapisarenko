/* eslint-disable @next/next/no-img-element */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  /**
   * TODO Вынести в ENV
   * Не включать метрики при раработке
   */
  const ymId = 87388785

  return (
    <Html>
      <Head>
        <meta name="yandex-verification" content="5fa67f17759383e0" />
        <meta name="google-site-verification" content="LYQ4asAaJJanGdnuFKfsuftBcJTtH-24dyGeLFjxlm4" />
      </Head>
      <body>
        <Main />
        <NextScript />

        <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                ym(${ymId}, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true
                });
              `,
            }}
          />
        <noscript>
          <div>
            <img src={`https://mc.yandex.ru/watch/${ymId}`} style={{ position:'absolute', left:'-9999px' }} alt="" />
          </div>
        </noscript>
      </body>
    </Html>
  )
}
