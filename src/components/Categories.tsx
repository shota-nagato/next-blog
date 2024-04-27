import { Category } from '@/types/articleType'

type Props = {
  categories: Category[]
}

export default function Categories(props: Props) {
  return (
    <ul>
      {props.categories.map((category) => (
        <li className="mt-2 px-4 pb-2 border-b text-gray-700" key={category.id}>
          <a href={`/category/${category.id}`}>{category.name}</a>
        </li>
      ))}
    </ul>
  )
}
