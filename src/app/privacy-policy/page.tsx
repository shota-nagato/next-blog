import Image from 'next/image'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="rounded-[3px] bg-white px-[24px] pb-[90px] pt-[30px] md:px-[30px]">
      {/* パンくず */}
      <div className="flex items-center gap-[16px]">
        <Link href="/">
          <div className="size-[20px]">
            <Image
              alt="ホームアイコン"
              height={20}
              src="/home.svg"
              width={20}
            />
          </div>
        </Link>
        <div className="text-secondary-black">{'>'}</div>
      </div>

      {/* タイトル */}
      <h2 className="mt-[16px] text-[24px] font-bold text-primary-black">
        プライバシーポリシー
      </h2>
      <div className="mt-[10px] flex gap-[8px] text-[14px] text-secondary-black">
        <div className="flex items-center gap-[5px]">
          <Image alt="作成日" height={15} src="/clock.svg" width={15} />
          2024年5月28日
        </div>
        <div className="flex items-center gap-[5px]">
          <Image alt="更新日" height={15} src="/refresh.svg" width={15} />
          2024年5月28日
        </div>
      </div>

      {/* 運営社情報 */}
      <h3 className="mt-[60px] text-[20px] font-bold text-primary-black">
        運営者情報
      </h3>
      <div className="mt-[14px] text-[16px] text-primary-black">
        <p>運営者 : ShotaNagato</p>
        <p className="mt-[2px]">
          ブログURL :{' '}
          <a className="text-primary-blue" href="https://nagato-tech.com/">
            https://nagato-tech.com/
          </a>
        </p>
        <p className="mt-[2px]">
          お問い合わせ :{' '}
          <a
            className="text-primary-blue"
            href="https://nagato-tech.com/contact/"
          >
            https://nagato-tech.com/contact/
          </a>
        </p>

        {/* 個人情報の利用目的 */}
        <h3 className="mt-[60px] text-[20px] font-bold text-primary-black">
          個人情報の利用目的
        </h3>
        <div className="mt-[14px] text-[16px] text-primary-black">
          <p>
            当ブログでは、お問い合わせの際に、氏名・メールアドレス等の個人情報をご登録いただく場合があります。
          </p>
          <p className="mt-[6px]">
            これらの個人情報は、お問い合わせに対する回答や必要な情報をご連絡するために利用し、それ以外の目的では利用しません。
          </p>
        </div>

        {/* 個人情報の第三者への開示 */}
        <h3 className="mt-[60px] text-[20px] font-bold text-primary-black">
          個人情報の第三者への開示
        </h3>
        <div className="mt-[14px] text-[16px] text-primary-black">
          <p>
            個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。
            <br />
            ・本人のご了解がある場合
            <br />
            ・法令等への協力のため、開示が必要となる場合
          </p>
        </div>

        {/* 個人情報の開示・訂正・追加・削除・利用停止 */}
        <h3 className="mt-[60px] text-[20px] font-bold text-primary-black">
          個人情報の開示・訂正・追加・削除・利用停止
        </h3>
        <div className="mt-[14px] text-[16px] text-primary-black">
          <p>
            個人情報の開示・訂正・追加・削除・利用停止をご希望の場合には、ご本人であることを確認したうえで、速やかに対応致します。
          </p>
        </div>

        {/* Cookieについて */}
        <h3 className="mt-[60px] text-[20px] font-bold text-primary-black">
          Cookieについて
        </h3>
        <div className="mt-[14px] text-[16px] text-primary-black">
          <p>
            当ブログでは、一部のコンテンツにおいてCookieを利用しています。Cookieとは、webコンテンツへのアクセスに関する情報であり、お名前・メールアドレス・住所・電話番号は含まれません。
          </p>
          <p className="mt-[6px]">
            また、お使いのブラウザ設定からCookieを無効にすることが可能です。
          </p>
        </div>

        {/* アクセス解析ツールについて */}
        <h3 className="mt-[60px] text-[20px] font-bold text-primary-black">
          アクセス解析ツールについて
        </h3>
        <div className="mt-[14px] text-[16px] text-primary-black">
          <p>
            当ブログでは、一部のコンテンツにおいてCookieを利用しています。Cookieとは、webコンテンツへのアクセスに関する情報であり、お名前・メールアドレス・住所・電話番号は含まれません当ブログでは、一部のコンテンツにおいてCookieを利用しています。Cookieとは、webコンテンツへのアクセスに関する情報であり、お名前・メールアドレス・住所・電話番号は含まれません。
          </p>
          <p className="mt-[6px]">
            Googleアナリティクスの詳細は
            <a href="https://marketingplatform.google.com/about/analytics/terms/jp/">
              「Googleアナリティクス利用規約」
            </a>
            をご覧ください。
          </p>
        </div>

        {/* 著作権について */}
        <h3 className="mt-[60px] text-[20px] font-bold text-primary-black">
          著作権について
        </h3>
        <div className="mt-[14px] text-[16px] text-primary-black">
          <p>
            当Webサイト内に掲載されている文章、画像、イラストなどの無断転載は一切、禁止します。当Webサイトの目的は、著作権や肖像権の侵害ではありません。著作権や肖像権に問題点、疑問点がございましたら、お問合せフォームよりご連絡をいただけますよう、お願いいたします。
          </p>
        </div>

        {/* リンクついて */}
        <h3 className="mt-[60px] text-[20px] font-bold text-primary-black">
          リンクについて
        </h3>
        <div className="mt-[14px] text-[16px] text-primary-black">
          <p>
            当Webサイトにリンクを貼る際の許可は不要です。ただし、インラインフレームの使用、画像の直リンクはご遠慮ください。また、記事中の文章を引用される場合は、必ず引用元・参照元・出典元のURLを記載いただけますよう、お願いいたします。
          </p>
        </div>

        {/* 免責事項 */}
        <h3 className="mt-[60px] text-[20px] font-bold text-primary-black">
          免責事項
        </h3>
        <div className="mt-[14px] text-[16px] text-primary-black">
          <p>
            当ブログからリンクやバナーなどによって他のサイトに移動した場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
          </p>
          <p className="mt-[6px]">
            当ブログのコンテンツについて、可能な限り正確な情報を掲載するよう努めていますが、誤情報が入り込んだり、情報が古くなっている場合があります。当ブログに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
          </p>
        </div>

        {/* プライバシーポリシーの変更について */}
        <h3 className="mt-[60px] text-[20px] font-bold text-primary-black">
          プライバシーポリシーの変更について
        </h3>
        <div className="mt-[14px] text-[16px] text-primary-black">
          <p>
            当ブログは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。
          </p>
          <p className="mt-[6px]">
            修正された最新のプライバシーポリシーは常に本ページにて開示されます。
          </p>
        </div>
      </div>
    </div>
  )
}
