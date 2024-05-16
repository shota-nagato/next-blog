import Image from 'next/image'
import Link from 'next/link'
import { use } from 'react'

import { getArticles } from '@/libs/microcms'
import { Article } from '@/types/articleType'

type Props = {
  article: Article
}

export default function CategoryArticlesList(props: Props) {
  const { contents } = use(
    getArticles({
      filters: `category[equals]${props.article.category.id}[and]id[not_equals]${props.article.id}`,
    }),
  )
  return (
    <div className="flex gap-[20px] overflow-x-auto md:grid md:grid-cols-3">
      {contents.map((article) => (
        <Link
          className="flex flex-col"
          href={`/article/${article.id}`}
          key={article.id}
        >
          <Image
            alt="アイキャッチ"
            className="w-full min-w-[210px] rounded-[3px] object-cover shadow md:min-w-0"
            height={157}
            src={article.eyecatch?.url ?? '/no-image.png'}
            width={210}
          />
          <div className="mt-[10px] text-[16px] text-primary-black">
            {article.title}
          </div>
        </Link>
      ))}
    </div>
  )
}
