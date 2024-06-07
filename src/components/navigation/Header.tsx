import Image from 'next/image'
import Link from 'next/link'
import { use } from 'react'

import { getCategories } from '@/libs/microcms'

export const Header = () => {
  const { contents } = use(getCategories({ orders: 'publishedAt' }))

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
        <div className="flex items-center gap-[40px]">
          <div className="hidden items-center gap-[30px] md:flex">
            {contents.map((category) => (
              <div key={category.id}>
                <Link
                  className="font-[16px] text-white"
                  href={`/category/${category.id}`}
                >
                  {category.name}
                </Link>
              </div>
            ))}
          </div>
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
      </div>
    </header>
  )
}
