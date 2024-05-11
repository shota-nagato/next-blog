import { use } from 'react'

import { getTags } from '@/libs/microcms'

export const Tags = () => {
  const { contents } = use(getTags())

  return (
    <div className="flex flex-wrap pt-[20px]">
      {contents.map((tag) => (
        <div
          className="mb-[17px] mr-[16px] border-r border-[#B2B7B7] pr-[16px] text-secondary-black last:mr-0 last:border-none last:pr-0"
          key={tag.id}
        >
          <a className="flex items-center gap-[3px]" href="#">
            <div className="text-[16px]">{`# ${tag.name}`}</div>
            <div className="text-[14px]">{`(0)`}</div>
          </a>
        </div>
      ))}
    </div>
  )
}
