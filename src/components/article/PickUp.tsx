import Image from 'next/image'
import Link from 'next/link'
import { use } from 'react'

import { formatDate } from '@/libs/convertdate'
import { getArticles } from '@/libs/microcms'

export const PickUp = () => {
  const { contents } = use(getArticles({ limit: 2 }))
  return (
    <div className="mx-auto max-w-screen-xl px-[22.5px] lg:px-[100px]">
      <h2 className="text-[36px] font-semibold">PICK UP</h2>
      <div className="mt-[60px] grid grid-cols-1 gap-[30px] sm:grid-cols-2 md:mt-[40px]">
        {contents.map((article) => (
          <article key={article.id}>
            <Link className="relative" href={`/article/${article.id}`}>
              <Image
                alt="アイキャッチ"
                className="w-full rounded-t-[3px] object-cover shadow"
                height={240}
                src={article.eyecatch?.url ?? '/no-image.png'}
                width={345}
              />
              <div className="absolute bottom-[16px] left-0">
                <h3 className="bg-white px-[6px] py-[8px] text-[20px] text-primary-black">
                  {article.title}
                </h3>
                <div className="mt-[8px] flex gap-[8px] bg-white px-[6px] py-[8px] text-[14px] text-secondary-black">
                  <div className="flex items-center gap-[5px]">
                    <Image
                      alt="作成日"
                      height={15}
                      src="/clock.svg"
                      width={15}
                    />
                    {formatDate(article.createdAt)}
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <Image
                      alt="更新日"
                      height={15}
                      src="/refresh.svg"
                      width={15}
                    />
                    {formatDate(article.updatedAt)}
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
