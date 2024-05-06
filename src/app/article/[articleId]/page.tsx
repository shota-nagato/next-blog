import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import '@/styles/article.css'
import { formatDate } from '@/libs/convertdate'
import { getArticles, getArticleDetail } from '@/libs/microcms'

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
    <article className="container mx-auto rounded-lg bg-white px-2 py-4">
      <h1 className="text-center text-lg font-bold">{article.title}</h1>
      <div className="mt-2 flex justify-end gap-2 text-[12px] text-gray-800 md:text-xs">
        <div className="flex items-center gap-1">
          <svg
            className="size-3 md:size-4"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {formatDate(article.createdAt)}
        </div>
        <div className="flex items-center gap-1">
          <svg
            className="size-3 md:size-4"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {formatDate(article.updatedAt)}
        </div>
      </div>
      <Image
        alt="アイキャッチ"
        className="mt-2 rounded-lg object-cover"
        height={1200}
        src={article.eyecatch?.url ?? '/no-image.png'}
        width={1600}
      />
      {/* <div className="mt-2 flex flex-wrap gap-2">
        {article.categories.map((category) => (
          <a
            className="rounded-full bg-slate-300 px-2 py-1 text-sm"
            href={`/category/${category.id}`}
            key={`${article.id}-${category.id}`}
          >
            {category.name}
          </a>
        ))}
      </div> */}
      <div className="article mt-4">
        <ArticleContent content={article.content} />
      </div>
    </article>
  )
}
