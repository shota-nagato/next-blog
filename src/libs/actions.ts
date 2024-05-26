'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

type State = {
  errors?: {
    name?: string[]
    email?: string[]
    title?: string[]
    content?: string[]
  }
  message: string
}

const ContactSchema = z.object({
  name: z.string().min(1, { message: '名前を入力してください' }),
  email: z.string().min(1, { message: 'メールアドレスを入力してください' }),
  title: z.string().min(1, { message: 'タイトルを入力してください' }),
  content: z.string().min(1, { message: '内容を入力してください' }),
})

export const onSubmit = async (prevState: State, formData: FormData) => {
  const validatedFields = ContactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    title: formData.get('title'),
    content: formData.get('content'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: '未入力の項目があります',
    }
  }

  try {
    await fetch('https://6bqywzmcjn.microcms.io/api/v1/contact', {
      headers: {
        'X-MICROCMS-API-KEY': `${process.env.CONTACT_API_KEY}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(validatedFields.data),
    })
  } catch (error) {
    return {
      message: 'フォームの送信に失敗しました',
    }
  }

  revalidatePath('/contact/complete')
  redirect('/contact/complete')
}
