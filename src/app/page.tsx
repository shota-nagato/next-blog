import { getArticles } from '@/libs/microcms'
import Image from 'next/image'
import Link from 'next/link'
import { use } from 'react'
import { formatDate } from '@/libs/convertdate'

export default function Home() {
  const { contents } = use(getArticles())
  return (
    <div className="grid grid-cols-2 gap-6 container mx-auto px-2">
      {contents.map((article) => (
        <article
          className="flex flex-col shadow pb-4 rounded-xl bg-white hover:bg-gray-50"
          key={article.id}
        >
          <Link
            href={`/article/${article.id}`}
            className="flex flex-col items-start"
          >
            <Image
              src={article.eyecatch?.url ?? '/no-image.png'}
              alt="アイキャッチ"
              width={1600}
              height={1200}
              className="rounded-t-xl object-cover"
            />
            <div className="px-2">
              <p className="flex gap-2 mt-2 text-xs text-gray-400">
                {formatDate(article.createdAt)}
                {formatDate(article.updatedAt)}
              </p>
              <h2 className="text-sm md:text-md font-bold mt-2">
                {article.title}
              </h2>
            </div>
          </Link>
        </article>
      ))}
    </div>
  )
}
