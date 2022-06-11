import Head from 'next/head';

export default function Index() {
  return (
    <>
      <Head>
        <title>Will Hackett - Software Engineer — Melbourne, Australia</title>
        <meta
          name="description"
          content="I'm a software engineer and have built products you've probably used, for Expedia, Coles, SEEK & more."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=1.0.0"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=1.0.0"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=1.0.0"
        />
        <link rel="manifest" href="/site.webmanifest?v=1.0.0" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg?v=1.0.0"
          color="#100f0f"
        />
        <link rel="shortcut icon" href="/favicon.ico?v=1.0.0" />
        <meta name="apple-mobile-web-app-title" content="Will Hackett" />
        <meta name="application-name" content="Will Hackett" />
        <meta name="msapplication-TileColor" content="#100f0f" />
        <meta name="theme-color" content="#100f0f" />
      </Head>
      <div className="mx-auto w-11/12 lg:w-4/6 mt-16 lg:mt-24 lg:">
        <header>
          <h1 className="text-2xl uppercase tracking-wider font-extralight">
            Will Hackett
          </h1>
          <h2 className="my-4 lg:my-8">
            Leave things better than you found them.
          </h2>
        </header>
        <main></main>
        <footer className="text-xs uppercase">:)</footer>
      </div>
    </>
  );
}
