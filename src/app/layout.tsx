import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { Sidebar } from '@/components/navigation/Sidebar'
import Image from 'next/image'

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
        <header className="sticky top-0 shadow bg-white py-4 mb-8">
          <div className="flex w-full md:px-8 mx-auto max-w-[1200px]">
            <div className="mx-2">
              <Image src="/logo.png" alt="ロゴ" width={32} height={32} />
            </div>
          </div>
        </header>
        <div className="flex md:flex-row flex-col w-full gap-8 md:gap-4 md:px-8 px-2 max-w-[1200px] mx-auto">
          <main className="md:w-2/3 w-full">{children}</main>
          <Sidebar />
        </div>
        <footer className="bg-[#efefef] mt-8 py-4 text-center">
          <div className="flex gap-4 justify-center text-sm">
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
