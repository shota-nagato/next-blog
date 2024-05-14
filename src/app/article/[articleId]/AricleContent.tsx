'use client'
import 'highlight.js/styles/vs2015.css'
import hljs from 'highlight.js'
import parse from 'html-react-parser'
import { useEffect } from 'react'

type Props = {
  content: string
}

export default function ArticleContent(props: Props) {
  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block as HTMLElement)
    })

    const codeElements = document.querySelectorAll('[data-filename]')
    codeElements.forEach((codeElement) => {
      const filename = codeElement.getAttribute('data-filename')
      const spanElement = document.createElement('span')
      spanElement.textContent = filename
      spanElement.className = 'code-block-filename'
      codeElement.prepend(spanElement)
    })
  }, [])
  return parse(props.content)
}
