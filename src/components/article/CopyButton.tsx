'use client'
import Image from 'next/image'

type Props = {
  url: string
}

export const CopyButton = (props: Props) => {
  const copyLink = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(props.url)
      alert('クリップボードにコピーしました')
    } catch (error) {
      alert('失敗しました')
    }
  }
  return (
    <div>
      <button
        className="flex items-center gap-[10px]"
        onClick={() => copyLink()}
        type="button"
      >
        <Image alt="linkアイコン" height={30} src="/link.svg" width={30} />
        <div className="text-[14px] text-secondary-black">url copy</div>
      </button>
    </div>
  )
}
