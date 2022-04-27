import Head from 'next/head';
import { Fragment } from 'react';

const links: NodeJS.Dict<[string, string | null, string][]> = {
  Present: [
    ['AutoGrab', null, 'https://www.autograb.com.au/'],
    ['venueScout GmbH', null, 'https://www.venuescout.org/'],
  ],
  Past: [
    ['Coles Group', '2020', 'https://www.colesgroup.com.au/'],
    ['StartOut Australia', '2019', 'https://www.startout.org.au/'],
    ['SEEK Limited', '2019', 'https://www.startout.org.au/'],
    ['Localz', '2018', 'https://www.localz.com/'],
    ['InnoWell PwC', '2018', 'https://www.innowell.org/'],
    ['Enablo', '2017', 'https://www.enablo.com/'],
    ['OpenClub', '2017', 'https://www.openclub.com.au/'],
    ['Word of House', '2016', 'https://www.willhackett.com/'],
    ['Expedia', '2014', 'https://www.expedia.com/'],
  ],
  Links: [
    [
      'GPG Key',
      null,
      'https://keys.openpgp.org/vks/v1/by-fingerprint/087CC35930841DB15E4C9A87DD2A653B8B6E9865',
    ],
    ['LinkedIn', null, 'https://www.willhackett.com/in/willhackett/'],
    ['GitHub', null, 'https://www.github.com/willhackett'],
  ],
};

export default function Index() {
  return (
    <>
      <Head>
        <title>Will Hackett - Software Architect — Melbourne, Australia</title>
        <meta
          name="description"
          content="I am a software architect and am presently CTO at AutoGrab and venueScout GmbH. I've worked for Expedia, PwC, Coles, SEEK and more."
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
          <h2 className="my-4 lg:my-8">Leave it better than you found it.</h2>
        </header>
        {Object.keys(links).map((key) => (
          <section key={key} className="mb-4 lg:mb-8">
            <h3 className="text-xs uppercase tracking-wider">{key}</h3>
            <ul className="list-disc list-outside pl-4">
              {links[key]?.map(([name, small, href]) => (
                <li key={href}>
                  <a href={href} className="hover:underline">
                    {name}
                    {small && <small>, {small}</small>}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <main></main>
        <footer className="text-xs uppercase">:)</footer>
      </div>
    </>
  );
}
