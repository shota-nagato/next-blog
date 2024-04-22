import { getArticles } from '@/libs/microcms'
import Image from 'next/image'
import Link from 'next/link'
import { use } from 'react'
import { formatDate } from '@/libs/convertdate'

export default function Home() {
  const { contents } = use(getArticles())
  return (
    <div className="grid grid-cols-2 md:gap-6 gap-2 container mx-auto px-2">
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
              <div className="flex gap-2 mt-2 text-[12px] md:text-xs text-gray-400">
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
