import Head from 'next/head';

interface SEOProps {
    title: string;
    description?: string;
    image?: string;
    excludeTitleSuffix?: boolean;
    indexPage?: boolean;
  }

export default function SEO(props: SEO) {
  return (
    <Head>
      <title>Dev News!</title>
    </Head>
  );
}