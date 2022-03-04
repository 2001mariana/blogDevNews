import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import SEO from '../../components/SEO';
import { getPrismicClient } from '../../services/prismic';

import './posts.module.scss';

interface Post {
  id: string;
  title: string;
}
interface PostsProps {
  posts: Post[];
}
export default function Posts() {
  return (
    <>
      <SEO title="Posts" />
      <main className="container">
        <div className="posts">
          <Link href="#">
            <a>
              <time>25 de dezembro de 2021</time>
              <strong>Titulo</strong>
              <p>Paragrafo</p>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', ]
  })
  return {
    props: {},
    revalidate: 60 * 60 * 12, // 12 horas
  };
};