import { getArticles, getArticleDetail } from '@/libs/microcms'
import Image from 'next/image'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import '@/styles/article.css'
import ArticleContent from './AricleContent'

type Props = {
  params: { articleId: string }
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const id = props.params.articleId
  const article = await getArticleDetail(id)
  return {
    title: article.title,
  }
}

export async function generateStaticParams() {
  const { contents } = await getArticles()
  const paths = contents.map((article) => {
    return {
      article: article.id,
    }
  })
  return paths
}

export default async function Article(props: Props) {
  const article = await getArticleDetail(props.params.articleId)

  if (!article) {
    notFound()
  }

  return (
    <article>
      <h1>{article.title}</h1>
      <p>{article.createdAt}</p>
      <Image
        src={article.eyecatch?.url ?? '/no-image.png'}
        alt="アイキャッチ"
        width={1600}
        height={1200}
        className="rounded-lg object-cover"
      />
      <div>
        <ArticleContent content={article.content} />
      </div>
    </article>
  )
}
