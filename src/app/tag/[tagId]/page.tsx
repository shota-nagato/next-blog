import { Metadata } from 'next'
import { use } from 'react'

import ArticleCardList from '@/components/article/CardList'

import { getArticles, getTagDetail } from '@/libs/microcms'

type Props = {
  params: { tagId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const id = props.params.tagId
  const category = await getTagDetail(id)
  return {
    title: `NagatoTech blog | ${category.name}のタグの記事一覧`,
  }
}

export default function CategoryArticleList(props: Props) {
  const { contents } = use(
    getArticles({
      filters: `tags[contains]${props.params.tagId}`,
    }),
  )
  return <ArticleCardList articles={contents} />
}
