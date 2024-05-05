import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { use } from 'react'

import { getArticles, getCategoryDetail } from '@/libs/microcms'

type Props = {
  params: { categoryId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const id = props.params.categoryId
  const category = await getCategoryDetail(id)
  return {
    title: `nagato-tech | ${category.name}のカテゴリーの記事一覧`,
  }
}

export default function CategoryArticleList(props: Props) {
  const { contents } = use(
    getArticles({
      filters: `categories[contains]${props.params.categoryId}`,
    }),
  )
  return (
    <div className="mx-auto grid w-3/4 grid-cols-1 gap-6 md:grid-cols-2">
      {contents.map((article) => (
        <article className="flex flex-col p-4 shadow" key={article.id}>
          <Link
            className="flex flex-col items-center"
            href={`/article/${article.id}`}
          >
            <Image
              alt="アイキャッチ"
              className="rounded-xl object-cover"
              height={1200}
              src={article.eyecatch?.url ?? '/no-image.png'}
              width={1600}
            />
            <h2 className="text-3xl font-bold">{article.title}</h2>
            <div className="flex flex-wrap gap-2 px-4">
              {article.categories.map((category) => (
                <p
                  className="rounded-full bg-slate-300 px-2 text-xs"
                  key={`${article.id}-${category.id}`}
                >
                  {category.name}
                </p>
              ))}
            </div>
          </Link>
        </article>
      ))}
    </div>
  )
}
