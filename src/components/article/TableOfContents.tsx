import Link from 'next/link'

type TocEntry = {
  text: string | null
  name: string | undefined
  id: string
}

type Props = {
  toc: TocEntry[]
}

export default function tableOfContents(props: Props) {
  return (
    <div className="rounded-[2px] border p-[24px]">
      <h3 className="mb-[16px] text-[16px] font-bold text-secondary-black">
        目次
      </h3>
      <ul>
        {props.toc.map((content) => (
          <li
            className={`${content.name == 'h3' ? 'pl-[24px]' : ''} mb-[10px] border-b pb-[10px] text-[14px]`}
            key={content.id}
          >
            <Link href={`#${content.id}`}>{content.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
