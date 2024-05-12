import { Metadata } from 'next'
import { use } from 'react'

import ArticleCardList from '@/components/article/CardList'

import { getArticles, getCategoryDetail } from '@/libs/microcms'

type Props = {
  params: { categoryId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const id = props.params.categoryId
  const category = await getCategoryDetail(id)
  return {
    title: `NagatoTech blog | ${category.name}のカテゴリーの記事一覧`,
  }
}

export default function CategoryArticleList(props: Props) {
  const { contents } = use(
    getArticles({
      filters: `category[equals]${props.params.categoryId}`,
    }),
  )
  return <ArticleCardList articles={contents} />
}
