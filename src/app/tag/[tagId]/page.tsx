import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { use } from 'react'

import ArticleCardList from '@/components/article/CardList'

import { getArticles, getTagDetail } from '@/libs/microcms'

type Props = {
  params: { tagId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const id = props.params.tagId
  const category = await getTagDetail(id)
  return {
    title: `NagatoTech blog | ${category.name}のタグの記事一覧`,
  }
}

export default function CategoryArticleList(props: Props) {
  const getTagName = async (props: Props): Promise<string> => {
    const id = props.params.tagId
    const category = await getTagDetail(id)
    return category.name
  }

  const { contents } = use(
    getArticles({
      filters: `tags[contains]${props.params.tagId}`,
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
                  alt="ホームアイkコン"
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
                height="21"
                viewBox="0 0 20 21"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M7.36192 7.09864H2.75025C2.3362 7.09864 2 7.4362 2 7.85177C2 8.26754 2.33627 8.60509 2.75025 8.60509H6.90913L5.73183 12.5216H2.75038C2.33633 12.5216 2.00013 12.8592 2.00013 13.2748C2.00013 13.6905 2.3364 14.0281 2.75038 14.0281H5.27888L3.92586 18.529C3.80614 18.927 4.0309 19.3476 4.42735 19.4678C4.82381 19.5878 5.24291 19.3622 5.3625 18.9642L6.84649 14.0279H10.931L9.57797 18.529C9.45838 18.927 9.68314 19.3475 10.0796 19.4677C10.476 19.5878 10.895 19.3622 11.0147 18.9642L12.4986 14.0278H17.2498C17.6639 14.028 18 13.6905 18 13.2747C18 12.8591 17.6639 12.5216 17.2498 12.5216H12.9514L14.1287 8.60489H17.2496C17.6638 8.60502 17.9999 8.26754 17.9999 7.85177C17.9999 7.43613 17.6638 7.09864 17.2496 7.09864H14.5816L15.9727 2.47097C16.0924 2.07299 15.8677 1.65242 15.4712 1.53224C15.0747 1.41219 14.6556 1.63781 14.5361 2.03577L13.014 7.09868H8.92935L10.3206 2.471C10.4401 2.07303 10.2154 1.65245 9.81894 1.53228C9.42249 1.41222 9.00352 1.63784 8.8838 2.03581L7.36195 7.09871L7.36192 7.09864ZM12.5611 8.60496H8.4764L7.29896 12.5217H11.3836L12.5611 8.60496Z"
                  fill="#B2B7B7"
                  fillRule="evenodd"
                />
              </svg>
              <div className="text-[14px] text-[#B2B7B7]">タグ</div>
            </div>
          </div>
          <div className="mt-[16px] text-[24px] text-primary-black">
            {getTagName(props)}に関する記事一覧
          </div>
        </div>
      </div>
      <div className="mt-[30px]">
        <ArticleCardList articles={contents} />
      </div>
    </div>
  )
}
