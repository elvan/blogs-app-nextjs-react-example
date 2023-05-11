import Head from 'next/head';
import { Fragment } from 'react';

import Hero from '../components/home-page/hero';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>My Blog</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
      </Head>
      <Hero />
    </Fragment>
  );
}

export default HomePage;
