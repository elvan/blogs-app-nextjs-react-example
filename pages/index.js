import Head from 'next/head';
import { Fragment } from 'react';

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
    </Fragment>
  );
}

export default HomePage;
