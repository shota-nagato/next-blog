import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import '@/styles/article.css'

import CategoryArticlesList from '@/components/article/CategoryArticlesList'

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
    <div>
      <article className="rounded-[3px] bg-white px-[24px] pb-[90px] pt-[30px] md:px-[30px]">
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
            <Link href={`/category/${article.category.id}`}>
              {article.category.name}
            </Link>
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
          className="mt-[24px] w-full rounded-[3px] object-cover"
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
        {/* 記事本文 */}
        <div className="article mt-[60px] md:mt-[90px]">
          <ArticleContent content={article.content} />
        </div>
        {/* シェア */}
        <div className="mt-[120px]">
          <div className="text-center text-[#B2B7B7]">share on</div>
          <div className="mt-[24px] flex items-center justify-center gap-[40px]">
            <Link href="#">
              <Image alt="xアイコン" height={30} src="/x.svg" width={30} />
            </Link>
            <Link href="#">
              <Image
                alt="facebookアイコン"
                height={30}
                src="/facebook.svg"
                width={30}
              />
            </Link>
            <Link href="#">
              <Image
                alt="lineアイコン"
                height={30}
                src="/line.svg"
                width={30}
              />
            </Link>
            <Link className="flex items-center gap-[10px]" href="#">
              <Image
                alt="linkアイコン"
                height={30}
                src="/link.svg"
                width={30}
              />
              <div className="text-[14px] text-secondary-black">url copy</div>
            </Link>
          </div>
        </div>
        {/* プロフィール */}
        <div className="mt-[90px] hidden bg-[#F8FAFB] p-[24px] md:block">
          <div className="flex items-center gap-[24px]">
            <Image
              alt="アバター"
              className="rounded-full shadow"
              height={80}
              src="/avator.png"
              width={80}
            />
            <div>
              <div className="flex items-end gap-[16px]">
                <h3 className="text-[20px] text-primary-black">ShotaNagato</h3>
                <p className="text-[14px] text-secondary-black">
                  Webエンジニア
                </p>
              </div>
              <p className="mt-[16px] text-primary-black">
                社会人2年目のWebエンジニア｜RailsとかNextとか｜筋トレ｜SUP
              </p>
            </div>
          </div>
        </div>
      </article>
      <div className="mt-[90px] flex justify-between text-[16px] text-primary-black">
        <div>{'< '}前の記事</div>
        <Link className="flex items-center gap-[10px]" href="/">
          <div className="size-[20px]">
            <Image
              alt="ホームアイコン"
              height={20}
              src="/home.svg"
              width={20}
            />
          </div>
          ホーム
        </Link>
        <div className="flex items-center gap-[]">
          {/* <Link href="#">
            <Image alt="次矢印" height={12} src="/arrow-next.svg" width={12} />
          </Link> */}
          次の記事{' >'}
        </div>
      </div>
      {/* 同じカテゴリの記事 */}
      <div className="mt-[120px]">
        <div className="text-[22px] text-primary-black">同じカテゴリの記事</div>
        <div className="mt-[24px]">
          <CategoryArticlesList article={article} />
        </div>
      </div>
    </div>
  )
}
