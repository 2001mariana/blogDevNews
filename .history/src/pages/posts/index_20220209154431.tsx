import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import SEO from '../../components/SEO';
import { getPrismicClient } from '../../services/prismic';
import styles from './posts.module.scss';

interface Post {
export default function Posts() {
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    {
      fetch: ['post.title', 'post.content'],
    },
  );

  console.log(response);

  return {
    props: {},
    revalidate: 60 * 60 * 12, // 12 horas
  };
};