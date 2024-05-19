import { use } from 'react'

import { getArticles, getTags } from '@/libs/microcms'

export async function getArticlesCount(tagId: string) {
  const { contents } = await getArticles({
    filters: `tags[contains]${tagId}`,
  })
  console.log(contents.length)
  return contents.length
}

export const Tags = () => {
  const { contents } = use(getTags())

  return (
    <div className="flex flex-wrap pt-[20px]">
      {contents.map((tag) => (
        <div
          className="mb-[17px] mr-[16px] border-r border-[#B2B7B7] pr-[16px] text-secondary-black last:mr-0 last:border-none last:pr-0"
          key={tag.id}
        >
          <a className="flex items-center gap-[3px]" href={`/tag/${tag.id}`}>
            <div className="text-[16px]">{`# ${tag.name}`}</div>
            <div className="text-[14px]">({getArticlesCount(tag.id)})</div>
          </a>
        </div>
      ))}
    </div>
  )
}
