import { getArticles, getCategoryDetail } from '@/libs/microcms'
import Image from 'next/image'
import { Metadata } from 'next'
import Link from 'next/link'
import { use } from 'react'

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-3/4 mx-auto">
      {contents.map((article) => (
        <article className="flex flex-col shadow p4" key={article.id}>
          <Link
            href={`/article/${article.id}`}
            className="flex flex-col items-center"
          >
            <Image
              src={article.eyecatch?.url ?? '/no-image.png'}
              alt="アイキャッチ"
              width={1600}
              height={1200}
              className="rounded-xl object-cover"
            />
            <h2 className="text-3xl font-bold">{article.title}</h2>
            <div className="flex flex-wrap gap-2 px-4">
              {article.categories.map((category) => (
                <p
                  className="text-xs bg-slate-300 rounded-full px-2"
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
