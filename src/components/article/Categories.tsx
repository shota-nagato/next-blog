import { use } from 'react'

import { getCategories } from '@/libs/microcms'

export const Categories = () => {
  const { contents } = use(getCategories({ limit: 50 }))
  return (
    <div className="flex flex-wrap gap-[12px]">
      {contents.map((category) => (
        <div
          className="rounded-[3px] bg-[#E8EBEB] px-[12px] py-[6px] text-primary-black"
          key={category.id}
        >
          <a href={`/category/${category.id}`}>{category.name}</a>
        </div>
      ))}
    </div>
  )
}
