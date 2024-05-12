import Image from 'next/image'
import Link from 'next/link'
import { use } from 'react'

import { getArticles } from '@/libs/microcms'

type Props = {
  categoryId: string
}

export default function CategoryArticlesList(props: Props) {
  const { contents } = use(
    getArticles({ filters: `category[equals]${props.categoryId}` }),
  )
  return (
    <div className="flex gap-[20px] overflow-x-auto">
      {contents.map((article) => (
        <Link
          className="flex flex-col"
          href={`/article/${article.id}`}
          key={article.id}
        >
          <Image
            alt="アイキャッチ"
            className="min-w-[210px] rounded-[3px] object-cover shadow"
            height={157}
            src={article.eyecatch?.url ?? '/no-image.png'}
            width={210}
          />
          <div className="mt-[10px] max-w-[210px] text-[16px] text-primary-black">
            {article.title}
          </div>
        </Link>
      ))}
    </div>
  )
}
