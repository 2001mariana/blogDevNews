import Prismic from '@prismicio/client';

export function getPrismicClient(req?: unknown) {
    const prismic = Prismic.Client(process.env.PRISMIC_ENDPOINT)
}