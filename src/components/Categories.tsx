import Link from 'next/link'

import { Category } from '@/types/articleType'

type Props = {
  categories: Category[]
}

export default function Categories(props: Props) {
  return (
    <ul>
      {props.categories.map((category) => (
        <li className="mt-2 border-b px-4 pb-2 text-gray-700" key={category.id}>
          <Link href={`/category/${category.id}`}>{category.name}</Link>
        </li>
      ))}
    </ul>
  )
}
