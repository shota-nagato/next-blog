import { use } from 'react'

import ArticleCardList from '@/components/article/CardList'

import { getArticles } from '@/libs/microcms'

export default function Home() {
  const { contents } = use(getArticles())

  return <ArticleCardList articles={contents} />
}
