import { Article } from '@/types/articleType'
import { MicroCMSQueries, createClient } from 'microcms-js-sdk'

if (!process.env.MICROCMS_SERVICE_DOMAIN)
  throw new Error('MICROCMS_SERVICE_DOMAIN is required')
if (!process.env.MICROCMS_API_KEY)
  throw new Error('MICROCMS_API_KEY is required')

export const microCMSClient = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
})

export async function getArticle(queries?: MicroCMSQueries) {
  const articles = await microCMSClient.getList<Article>({
    customRequestInit: {
      next: {
        revalidate: 0,
      },
    },
    endpoint: 'articles',
    queries,
  })
  return articles
}

export async function getArticlesDetail(
  contentId: string,
  queries?: MicroCMSQueries,
) {
  const articleDetail = await microCMSClient.getListDetail<Article>({
    customRequestInit: {
      next: {
        revalidate: 0,
      },
    },
    endpoint: 'articles',
    contentId,
    queries,
  })
  return articleDetail
}
