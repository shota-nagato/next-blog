'use client'
import parse from 'html-react-parser'
import Prism from 'prismjs'
import { useEffect } from 'react'
import 'prismjs/themes/prism-dark.css'

type Props = {
  content: string
}

export default function ArticleContent(props: Props) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return parse(props.content)
}
