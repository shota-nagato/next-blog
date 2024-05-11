import { MicroCMSQueries, createClient } from 'microcms-js-sdk'

import { Article, Category, Tag } from '@/types/articleType'

if (!process.env.MICROCMS_SERVICE_DOMAIN)
  throw new Error('MICROCMS_SERVICE_DOMAIN is required')
if (!process.env.MICROCMS_API_KEY)
  throw new Error('MICROCMS_API_KEY is required')

export const microCMSClient = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
})

export async function getArticles(queries?: MicroCMSQueries) {
  const articles = await microCMSClient.getList<Article>({
    customRequestInit: {
      next: {
        revalidate: 60,
      },
    },
    endpoint: 'articles',
    queries,
  })
  return articles
}

export async function getArticleDetail(
  contentId: string,
  queries?: MicroCMSQueries,
) {
  const articleDetail = await microCMSClient.getListDetail<Article>({
    customRequestInit: {
      next: {
        revalidate: 60,
      },
    },
    endpoint: 'articles',
    contentId,
    queries,
  })
  return articleDetail
}

export async function getCategories(queries?: MicroCMSQueries) {
  const categories = await microCMSClient.getList<Category>({
    customRequestInit: {
      next: {
        revalidate: 60,
      },
    },
    endpoint: 'categories',
    queries,
  })
  return categories
}

export async function getCategoryDetail(
  contentId: string,
  queries?: MicroCMSQueries,
) {
  const categoryDetail = await microCMSClient.getListDetail<Category>({
    customRequestInit: {
      next: {
        revalidate: 60,
      },
    },
    endpoint: 'categories',
    contentId,
    queries,
  })
  return categoryDetail
}

export async function getTags(queries?: MicroCMSQueries) {
  const tags = await microCMSClient.getList<Tag>({
    customRequestInit: {
      next: {
        revalidate: 60,
      },
    },
    endpoint: 'tags',
    queries,
  })
  return tags
}
