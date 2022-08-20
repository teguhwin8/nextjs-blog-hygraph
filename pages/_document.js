import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="google-site-verification"
          content="ZvPZfKEFaSxGE7BXQP4oXAmlhomhVqzn2m3lI9ax3v4"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <Script
          id="d"
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script strategy="lazyOnload" id="w">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
          `}
        </Script>
        <Script
          id="adsense"
          data-ad-client="ca-pub-3696600059241984"
          async="true"
          strategy="beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          crossOrigin="anonymous"
        ></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

