import Image from 'next/image'
import { use } from 'react'

import Categories from '@/components/Categories'

import { getCategories } from '@/libs/microcms'

export const Sidebar = () => {
  const { contents } = use(getCategories({ limit: 50 }))

  return (
    <aside className="mt-[120px] w-full md:mt-[280px] md:w-1/2 md:max-w-[360px]">
      <div className="rounded-lg bg-white p-4 shadow">
        <h2 className="text-sm font-bold">ここに検索フォームが入ります</h2>
      </div>
      <div className="mt-[60px] sm:mt-[30px]">
        <div className="flex items-center gap-[8px] rounded-t-[3px] bg-primary-blue px-[24px] py-[12px] text-[20px] text-white">
          <Image alt="人気アイコン" height={21} src="/boom.svg" width={20} />
          <div>人気の記事</div>
        </div>
        <div className="rounded-b-[3px] bg-white px-[24px] pb-[40px]">
          あああっ
        </div>
      </div>
      <div className="mt-[60px] sm:mt-[30px]">
        <div className="flex items-center gap-[8px] rounded-t-[3px] bg-primary-blue px-[24px] py-[12px] text-[20px] text-white">
          <Image alt="人気アイコン" height={21} src="/boom.svg" width={20} />
          <div>カテゴリ</div>
        </div>
        <div className="rounded-b-[3px] bg-white px-[24px] pb-[40px]">
          あああっ
        </div>
      </div>
      <div className="mt-[60px] sm:mt-[30px]">
        <div className="flex items-center gap-[8px] rounded-t-[3px] bg-primary-blue px-[24px] py-[12px] text-[20px] text-white">
          <Image alt="人気アイコン" height={21} src="/boom.svg" width={20} />
          <div>タグ</div>
        </div>
        <div className="rounded-b-[3px] bg-white px-[24px] pb-[40px]">
          あああっ
        </div>
      </div>
      <div className="mt-4 rounded-lg bg-white pb-4 shadow">
        <h2 className="rounded-t-lg bg-[#efefef] px-4 py-2 text-sm font-bold">
          人気の記事
        </h2>
        <ul className="mt-4 flex flex-col gap-2 px-4 text-sm text-gray-700">
          <li>Rails</li>
          <li>CSS</li>
        </ul>
      </div>
      <div className="mt-4 rounded-lg bg-white pb-4 shadow">
        <h2 className="rounded-t-lg bg-[#efefef] px-4 py-2 text-sm font-bold">
          カテゴリー
        </h2>
        <Categories categories={contents} />
      </div>
    </aside>
  )
}
