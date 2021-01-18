import Head from 'next/head'

import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <div className="Contact">
      <Head>
        <title>Contact - Spring Lakes Golf Club</title>
        <meta name="description" content="A private golf club offering great rates and 3 exceptional championship golf courses just north of the city of Toronto." key="description" />

        {/* Open Graph */}
        <meta name="og:title" property="og:title" content="Spring Lakes Golf Club" key="ogtitle" />
        <meta name="og:url" property="og:url" content="https://springlakesgolf.com/contact" key="ogurl" />
        <meta name="og:image" property="og:image" content="#" key="ogimage" />
        <meta name="og:description" property="og:description" content="A private golf club offering great rates and 3 exceptional championship golf courses just north of the city of Toronto." key="ogdescription" />
        
        {/* Twitter Cards */}
        <meta name="twitter:title" content="Spring Lakes Golf Club" key="twtitle" />
        <meta name="twitter:description" content="A private golf club offering great rates and 3 exceptional championship golf courses just north of the city of Toronto." key="twdescription" />
        <meta name="twitter:image" content="#" key="twimage" />
      </Head>

      <header>
        <Navbar />
        <br/>
      </header>

      <main>
        <h1>Contact Us</h1>
      </main>

      <footer>
        <br/>
        <p>© 2021 Spring Lakes Golf Club. All rights reserved.</p>
      </footer>
    </div>
  )
}