import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { use } from 'react'

import ArticleCardList from '@/components/article/CardList'

import { getArticles, getCategoryDetail } from '@/libs/microcms'

type Props = {
  params: { categoryId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const id = props.params.categoryId
  const category = await getCategoryDetail(id)
  return {
    title: `NagatoTech blog | ${category.name}のカテゴリーの記事一覧`,
  }
}

export async function getCategoryName(props: Props): Promise<string> {
  const id = props.params.categoryId
  const category = await getCategoryDetail(id)
  return category.name
}

export default function CategoryArticleList(props: Props) {
  const { contents } = use(
    getArticles({
      filters: `category[equals]${props.params.categoryId}`,
    }),
  )

  return (
    <div>
      <div>
        <div className="h-[5px] rounded-t-[3px] bg-primary-blue"></div>
        <div className="rounded-b-[3px] bg-white px-[30px] pb-[30px] pt-[25px]">
          <div className="flex items-center gap-[16px]">
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
            <div className="flex items-center gap-[3px]">
              <svg
                fill="none"
                height="17"
                viewBox="0 0 18 17"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M9 0.5C9.24318 0.5 9.46853 0.634036 9.59365 0.853094L17.9013 15.3985C18.0297 15.6232 18.033 15.903 17.9101 16.1311C17.7872 16.3591 17.5571 16.5 17.3077 16.5H0.692308C0.442889 16.5 0.21275 16.3591 0.0898617 16.1311C-0.0330268 15.903 -0.0296663 15.6232 0.0986588 15.3985L8.40635 0.853094C8.53147 0.634036 8.75682 0.5 9 0.5ZM1.91506 15.0455H16.0849L9 2.64084L1.91506 15.0455Z"
                  fill="#B2B7B7"
                  fill-rule="evenodd"
                />
              </svg>
              <div className="text-[14px] text-[#B2B7B7]">カテゴリ</div>
            </div>
          </div>
          <div className="mt-[16px] text-[24px] text-primary-black">
            {getCategoryName(props)}に関する記事一覧
          </div>
        </div>
      </div>
      <div className="mt-[30px]">
        <ArticleCardList articles={contents} />
      </div>
    </div>
  )
}
