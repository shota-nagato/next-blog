import { GoogleTagManager } from '@next/third-parties/google'
import Image from 'next/image'
import Link from 'next/link'

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
          <div className="mx-auto max-w-screen-xl gap-[120px] px-[22.5px] md:grid md:grid-cols-8 md:gap-[20px] lg:gap-[50px] lg:px-[100px]">
            <main className="md:col-span-5">{children}</main>
            <div className="md:col-span-3">
              <Sidebar />
            </div>
          </div>
        </div>
        {/* <div className="relative mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-2 md:flex-row md:gap-4 md:px-8">
          <main className="w-full md:w-2/3">{children}</main>
          <Sidebar />
        </div> */}
        <footer className="relative  mt-[180px] bg-primary-black py-[30px] text-center text-white">
          <div className="flex justify-center gap-[30px] text-sm">
            <Link href="/contact">
              <p>お問い合わせ</p>
            </Link>
            <Link href="/privacy-policy">
              <p>プライバシーポリシー</p>
            </Link>
            <p>サイトマップ</p>
          </div>
          <span className="mt-[24px] text-xs">
            © 2024 NagatoTech All rights reserved.
          </span>
        </footer>
      </body>
    </html>
  )
}
