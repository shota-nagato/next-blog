import { GoogleTagManager } from '@next/third-parties/google'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import { Sidebar } from '@/components/navigation/Sidebar'

import type { Metadata } from 'next'

import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'nagato-blog',
  description: 'blog',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <GoogleTagManager gtmId={process.env.GTM_ID ?? ''} />
        <header className="sticky top-0 mb-8 bg-white py-4 shadow">
          <div className="mx-auto flex w-full max-w-[1400px] md:px-8">
            <div className="mx-2">
              <Link className="flex flex-col items-start" href="/">
                <Image alt="ロゴ" height={32} src="/logo.png" width={32} />
              </Link>
            </div>
          </div>
        </header>
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-2 md:flex-row md:gap-4 md:px-8">
          <main className="w-full md:w-2/3">{children}</main>
          <Sidebar />
        </div>
        <footer className="mt-8 bg-[#efefef] py-4 text-center">
          <div className="flex justify-center gap-4 text-sm">
            <p>お問い合わせ</p>
            <p>プライバシーポリシー</p>
            <p>サイトマップ</p>
          </div>
          <span className="text-xs">
            © Copyright 2024 天才クリエイターズ .
          </span>
        </footer>
      </body>
    </html>
  )
}
