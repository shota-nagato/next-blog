import Image from 'next/image'
import Link from 'next/link'
import { use } from 'react'

import { formatDate } from '@/libs/convertdate'
import { getArticles } from '@/libs/microcms'

import { Categories } from './Categories'
import { Tags } from './Tags'

export const Sidebar = () => {
  const { contents } = use(getArticles({ limit: 5 }))

  return (
    <aside className="w-full min-w-[270px] md:w-1/2 lg:min-w-[360px]">
      {/* 検索フォーム */}
      <form className="flex">
        <input
          className="w-full rounded-l-[3px] bg-white px-[24px] py-[12px]"
          placeholder="キーワードで探す"
          type="text"
        />
        <button
          className="rounded-r-[3px] bg-primary-blue px-[20px]"
          type="submit"
        >
          <Image alt="検索" height={15} src="/search.svg" width={15} />
        </button>
      </form>

      {/* プロフィール */}
      <div className="mt-[60px] rounded-[3px] bg-white px-[24px] pb-[24px] pt-[30px] sm:mt-[30px]">
        <div className="flex items-center gap-[24px]">
          <Image
            alt="アバター"
            className="rounded-full shadow"
            height={80}
            src="/avator.png"
            width={80}
          />
          <div>
            <h3 className="text-[20px] text-primary-black">ShotaNagato</h3>
            <p className="text-[14px] text-secondary-black">Webエンジニア</p>
          </div>
        </div>

        {/* プロフィール文章 */}
        <p className="mt-[20px] text-[14px] text-secondary-black">
          社会人2年目のWebエンジニア｜RailsとかNextとか
        </p>
        <p className="text-[14px] text-secondary-black">筋トレ｜SUP</p>

        {/* Links */}
        <div className="mt-[28px] flex items-center gap-[16px]">
          <Link href="https://github.com/shota-nagato" target="_blank">
            <Image
              alt="Github"
              height={30}
              src="/github-black.svg"
              width={30}
            />
          </Link>
        </div>
      </div>

      {/* 人気記事 */}
      <div className="mt-[60px] sm:mt-[30px]">
        <div className="flex items-center gap-[8px] rounded-t-[3px] bg-primary-blue px-[24px] py-[12px] text-[20px] text-white">
          <Image alt="人気アイコン" height={21} src="/boom.svg" width={20} />
          <div>人気の記事</div>
        </div>
        <div className="rounded-b-[3px] bg-white px-[24px] pb-[40px]">
          {contents.map((article, index) => (
            <article className="pt-[20px]" key={article.id}>
              <Link
                className="relative flex items-center gap-[12px]"
                href={`/article/${article.id}`}
              >
                <Image
                  alt="アイキャッチ"
                  className="w-full max-w-[128px] object-cover"
                  height={96}
                  src={article.eyecatch?.url ?? '/no-image.png'}
                  width={128}
                />
                <div
                  className={`absolute left-[-10px] top-[-10px] size-[25px] rounded-full text-center ${index + 1 <= 3 ? 'bg-primary-blue text-white' : 'bg-[#E8EBEB] text-secondary-black'}`}
                >
                  {index + 1}
                </div>
                <div className="flex flex-col">
                  <div className="hidden-scrollbar flex overflow-x-auto">
                    <h3 className="flex-none text-[16px]">{article.title}</h3>
                  </div>
                  <div className="mt-[7px] flex items-center gap-[5px] text-[14px] text-secondary-black">
                    <Image
                      alt="作成日"
                      height={15}
                      src="/clock.svg"
                      width={15}
                    />
                    {formatDate(article.createdAt)}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      {/* カテゴリ */}
      <div className="mt-[60px] sm:mt-[30px]">
        <div className="flex items-center gap-[8px] rounded-t-[3px] bg-primary-blue px-[24px] py-[12px] text-[20px] text-white">
          <Image
            alt="人気アイコン"
            height={21}
            src="/category.svg"
            width={20}
          />
          <div>カテゴリ</div>
        </div>
        <div className="rounded-b-[3px] bg-white px-[24px] pb-[30px]">
          <Categories />
        </div>
      </div>

      {/* タグ */}
      <div className="mt-[60px] sm:mt-[30px]">
        <div className="flex items-center gap-[8px] rounded-t-[3px] bg-primary-blue px-[24px] py-[12px] text-[20px] text-white">
          <Image alt="人気アイコン" height={21} src="/tag.svg" width={20} />
          <div>タグ</div>
        </div>
        <div className="rounded-b-[3px] bg-white px-[24px] pb-[23px]">
          <Tags />
        </div>
      </div>
    </aside>
  )
}
