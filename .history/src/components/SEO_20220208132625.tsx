import Head from 'next/head';

interface SEOProps {
    title: string;
    description?: string;
    image?: string;
    excludeTitleSuffix?: boolean;
    indexPage?: boolean;
  }

export default function SEO({
    title,
    description,
    image,
    excludeTitleSuffix = false, 
    indexPage = true
}: SEOProps) {

    const pageTitle = `${title} ${!excludeTitleSuffix ? '| Dev News' : ''}`

    const pageImage = image ? `${process}` : null

  return (
    <Head>
      <title>Dev News!</title>
    </Head>
  );
}