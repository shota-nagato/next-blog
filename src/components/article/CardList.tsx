import Image from 'next/image'
import Link from 'next/link'

import { formatDate } from '@/libs/convertdate'
import { Article } from '@/types/articleType'

type Props = {
  articles: Article[]
}

export default function ArticleCardList(props: Props) {
  return (
    // <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2">
    <div className="grid grid-cols-1 gap-[15px] sm:grid-cols-2">
      {props.articles.map((article) => (
        <article className="bg-white shadow" key={article.id}>
          <Link href={`/article/${article.id}`}>
            <Image
              alt="アイキャッチ"
              className="w-full rounded-t-[3px] object-cover"
              height={240}
              src={article.eyecatch?.url ?? '/no-image.png'}
              width={345}
            />
            <div className="rounded-b-[3px] px-[16px] pb-[24px] pt-[16px]">
              {/* <h3 className="text-[20px] text-primary-black"> */}
              <h3 className="text-[16px] text-primary-black">
                {article.title}
              </h3>
              {/* <div className="mt-[47px] flex gap-[8px] text-[14px] text-secondary-black"> */}
              <div className="mt-[16px] flex gap-[8px] text-[14px] text-secondary-black">
                <div className="flex items-center gap-[5px]">
                  <Image alt="作成日" height={15} src="/clock.svg" width={15} />
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
              {article.category ? (
                <div className="mt-[10px] inline-block rounded-[3px] bg-[#E8EBEB] px-[12px] py-[6px] text-[12px]">
                  <div>{article.category.name}</div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </Link>
        </article>
      ))}
    </div>
  )
}
