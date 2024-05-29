'use client'

export const copyLink = async () => {
  const url = `https://nagato-tech.com/article/${article.title}`
  try {
    await navigator.clipboard.writeText(url)
    alert('クリップボードにコピーしました')
  } catch (error) {
    alert('失敗しました')
  }
}
