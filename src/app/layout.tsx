import { GoogleTagManager } from '@next/third-parties/google'
import Image from 'next/image'

import { Header } from '@/components/navigation/Header'
import { Sidebar } from '@/components/navigation/Sidebar'

import type { Metadata } from 'next'

import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'NagatoTech blog',
  description: 'webエンジニアの技術ブログです',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className="bg-[#F8FAFB]">
        <GoogleTagManager gtmId={process.env.GTM_ID ?? ''} />
        <Image
          alt="ファーストビュー画像"
          className="absolute h-[300px] w-full object-cover"
          height={300}
          src="/fv.png"
          width={1280}
        />
        <Header />
        <div className="relative">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-[120px] px-[22.5px] md:flex-row md:gap-[20px] lg:gap-[50px] lg:px-[100px]">
            <main className="">{children}</main>
            <Sidebar />
          </div>
        </div>
        {/* <div className="relative mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-2 md:flex-row md:gap-4 md:px-8">
          <main className="w-full md:w-2/3">{children}</main>
          <Sidebar />
        </div> */}
        <footer className="relative mt-8 bg-[#efefef] py-4 text-center">
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
