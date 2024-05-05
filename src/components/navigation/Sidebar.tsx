import { use } from 'react'

import Categories from '@/components/Categories'

import { getCategories } from '@/libs/microcms'

export const Sidebar = () => {
  const { contents } = use(getCategories({ limit: 50 }))

  return (
    <aside className="container mx-auto w-full md:w-1/3">
      <div className="rounded-lg bg-white p-4 shadow">
        <h2 className="text-sm font-bold">ここに名前が入ります</h2>
        <p className="text-xs text-gray-700">webエンジニア</p>
        <p className="mt-2 text-xs">Railsとか</p>
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
