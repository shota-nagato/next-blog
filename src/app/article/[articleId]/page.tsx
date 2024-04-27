import { getArticles, getArticleDetail } from '@/libs/microcms'
import Image from 'next/image'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import '@/styles/article.css'
import ArticleContent from './AricleContent'
import { formatDate } from '@/libs/convertdate'

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
    <article className="px-2 bg-white rounded-lg py-4 container mx-auto">
      <h1 className="text-lg font-bold text-center">{article.title}</h1>
      <div className="flex justify-end gap-2 mt-2 text-[12px] md:text-xs text-gray-800">
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-3 h-3 md:w-4 md:h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </svg>
          {formatDate(article.createdAt)}
        </div>
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-3 h-3 md:w-4 md:h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
          {formatDate(article.updatedAt)}
        </div>
      </div>
      <Image
        src={article.eyecatch?.url ?? '/no-image.png'}
        alt="アイキャッチ"
        width={1600}
        height={1200}
        className="rounded-lg object-cover mt-2"
      />
      <div className="flex flex-wrap gap-2 mt-2">
        {article.categories.map((category) => (
          <a
            href={`/category/${category.id}`}
            className="text-sm bg-slate-300 rounded-full px-2 py-1"
            key={`${article.id}-${category.id}`}
          >
            {category.name}
          </a>
        ))}
      </div>
      <div className="mt-4 article">
        <ArticleContent content={article.content} />
      </div>
    </article>
  )
}
