import Document, { Html, Head, Main, NextScript } from 'next/document'

class MainDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="og:type" property="og:type" content="website" key="og:type" />
          <meta property="og:locale" content="en_US" key="og:locale" />
          <meta name="og:site_name" property="og:site_name" content="Spring Lakes Golf Club" key="og:sitename" />
          
          <meta name="twitter:card" content="summary_large_image" key="twcard" />

          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#845ef7" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#845ef7" />
          <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MainDocument