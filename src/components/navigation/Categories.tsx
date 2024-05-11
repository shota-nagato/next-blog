import { use } from 'react'

import { getCategories } from '@/libs/microcms'

export const Categories = () => {
  const { contents } = use(getCategories({ orders: 'publishedAt' })) // 昇順
  return (
    <div className="pt-[20px]">
      {contents.map((category) => (
        <div
          className="mb-[12px] border-b border-[#B2B7B7] pb-[12px] text-primary-black last:border-none last:pb-0"
          key={category.id}
        >
          <a
            className="flex items-center gap-[10px]"
            href={`/category/${category.id}`}
          >
            <div className="text-[16px] text-primary-black">
              {category.name}
            </div>
            <div className="text-[14px] text-secondary-black">{`(0)`}</div>
          </a>
        </div>
      ))}
    </div>
  )
}
