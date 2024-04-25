export const Sidebar = () => {
  return (
    <aside className="w-full md:w-1/3 container mx-auto">
      <div className="px-4 bg-white shadow rounded-lg py-4">
        <h2 className="text-sm font-bold">ここに名前が入ります</h2>
        <p className="text-xs text-gray-700">webエンジニア</p>
        <p className="text-xs mt-2">Railsとか</p>
      </div>
      <div className="bg-white shadow rounded-lg pb-4 mt-4">
        <h2 className="px-4 py-2 text-sm rounded-t-lg font-bold bg-[#efefef]">
          人気の記事
        </h2>
        <ul className="flex flex-col gap-2 mt-4 px-4 text-sm text-gray-700">
          <li>Rails</li>
          <li>CSS</li>
        </ul>
      </div>
      <div className="bg-white shadow rounded-lg pb-4 mt-4">
        <h2 className="px-4 py-2 text-sm rounded-t-lg font-bold bg-[#efefef]">
          カテゴリー
        </h2>
        <ul className="flex flex-col gap-2 mt-4 px-4 text-sm text-gray-700">
          <li>Rails</li>
          <li>CSS</li>
        </ul>
      </div>
    </aside>
  )
}
