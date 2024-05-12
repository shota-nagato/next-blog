import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import '@/styles/article.css'
import { formatDate } from '@/libs/convertdate'
import { getArticles, getArticleDetail } from '@/libs/microcms'

import ArticleContent from './AricleContent'

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
    <article className="container mx-auto rounded-[3px] bg-white p-[24px] md:p-[30px]">
      {/* パンくず */}
      <div className="hidden-scrollbar flex items-center gap-[16px] overflow-x-auto">
        <Link href="/">
          <div className="size-[20px]">
            <Image
              alt="ホームアイコン"
              height={20}
              src="/home.svg"
              width={20}
            />
          </div>
        </Link>

        <div className="text-secondary-black">{'>'}</div>
        <div className="flex-none font-[14px] text-primary-blue">
          {article.category.name}
        </div>
        <div className="text-secondary-black">{'>'}</div>
        <div className="flex-none font-[14px]">{article.title}</div>
      </div>

      {/* カテゴリ */}
      <div className="mt-[60px] inline-block rounded-[3px] bg-[#E8EBEB] px-[12px] py-[6px] text-[16px] text-primary-black md:mt-[60px]">
        {article.category.name}
      </div>
      <h1 className="mt-[10px] text-[22px] md:mt-[16px] md:text-[36px]">
        {article.title}
      </h1>
      <div className="mt-[10px] flex gap-[8px] text-[14px] text-secondary-black">
        <div className="flex items-center gap-[5px]">
          <Image alt="作成日" height={15} src="/clock.svg" width={15} />
          {formatDate(article.createdAt)}
        </div>
        <div className="flex items-center gap-[5px]">
          <Image alt="更新日" height={15} src="/refresh.svg" width={15} />
          {formatDate(article.updatedAt)}
        </div>
      </div>
      <Image
        alt="アイキャッチ"
        className="mt-[24px] rounded-[3px] object-cover"
        height={1200}
        src={article.eyecatch?.url ?? '/no-image.png'}
        width={1600}
      />
      {/* タグ */}
      <div className="mt-[16px] flex flex-wrap text-[16px] text-secondary-black">
        {article.tags?.map((tag) => (
          <div
            className="mr-[16px] border-r border-[#B2B7B7] pr-[16px] last:border-none"
            key={tag.id}
          >
            {`# ${tag.name}`}
          </div>
        ))}
      </div>
      <div className="article mt-[60px] md:mt-[90px]">
        <ArticleContent content={article.content} />
      </div>
    </article>
  )
}
