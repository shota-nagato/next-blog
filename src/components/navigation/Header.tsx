import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="relative mb-[120px] bg-primary-blue">
      <div className="mx-auto flex h-[60px] max-w-screen-xl items-center justify-between px-[16px] lg:px-[100px]">
        <Link href="/">
          <Image
            alt="ヘッダーロゴ"
            height={24}
            src="/header-logo.png"
            width={175}
          />
        </Link>
        <Link
          className="flex items-center justify-between gap-[8px]"
          href="https://github.com/shota-nagato"
          target="_blank"
        >
          <Image
            alt="GitHubアイコン"
            height={24}
            src="/github.svg"
            width={24}
          />
          <div className="hidden text-white md:block">GitHub</div>
        </Link>
      </div>
    </header>
  )
}
