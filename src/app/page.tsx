import Image from 'next/image'
import Link from 'next/link'
import { use } from 'react'

import { formatDate } from '@/libs/convertdate'
import { getArticles } from '@/libs/microcms'

export default function Home() {
  const { contents } = use(getArticles())
  return (
    <div className="container mx-auto grid grid-cols-2 gap-2 px-2 md:gap-6">
      {contents.map((article) => (
        <article
          className="flex flex-col rounded-xl bg-white pb-4 shadow hover:bg-gray-50"
          key={article.id}
        >
          <Link
            className="flex flex-col items-start"
            href={`/article/${article.id}`}
          >
            <Image
              alt="アイキャッチ"
              className="rounded-t-xl object-cover"
              height={1200}
              src={article.eyecatch?.url ?? '/no-image.png'}
              width={1600}
            />
            <div className="px-2">
              <div className="mt-2 flex gap-2 text-[12px] text-gray-800 md:text-xs">
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
              <h2 className="mt-2 font-bold">{article.title}</h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {article.categories.map((category) => (
                  <p
                    className="rounded-full bg-slate-300 px-2 py-1 text-xs"
                    key={`${article.id}-${category.id}`}
                  >
                    {category.name}
                  </p>
                ))}
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  )
}
