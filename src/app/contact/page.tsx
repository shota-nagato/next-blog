'use client'

import { useFormState, useFormStatus } from 'react-dom'

import { onSubmit } from '@/libs/actions'

export default function Contact() {
  const initialState = {
    errors: {},
    message: '',
  }

  const [state, dispatch] = useFormState(onSubmit, initialState)

  const SubmitButton = () => {
    const { pending } = useFormStatus()
    return (
      <button
        className="rounded-[3px] bg-primary-blue px-[16px] py-[8px] font-bold text-white disabled:bg-gray-300"
        disabled={pending}
        type="submit"
      >
        送信
      </button>
    )
  }

  return (
    <div>
      <form
        action={dispatch}
        className="w-full rounded-[3px] bg-white p-[24px]"
      >
        <div className="text-center">
          <h2 className="text-[20px] font-bold">お問い合わせ</h2>
        </div>

        {state?.message && (
          <div className="text-sm text-red-500">{state.message}</div>
        )}

        <div className="mt-[12px]">
          <label htmlFor="name">
            氏名<span className="text-red-500">*</span>
          </label>
          <input
            className="w-full rounded-[3px] border px-[4px] py-[8px]"
            id="name"
            name="name"
            type="text"
          />
        </div>
        {state?.errors?.name &&
          state.errors.name.map((error) => (
            <div className="text-sm text-red-500" key={error}>
              {error}
            </div>
          ))}

        <div className="mt-[28px]">
          <label htmlFor="email">
            メールアドレス<span className="text-red-500">*</span>
          </label>
          <input
            className="w-full rounded-[3px] border px-[4px] py-[8px]"
            id="email"
            name="email"
            type="email"
          />
        </div>
        {state?.errors?.email &&
          state.errors.email.map((error) => (
            <div
              aria-live="polite"
              className="text-sm text-red-500"
              key={error}
            >
              {error}
            </div>
          ))}

        <div className="mt-[28px]">
          <label htmlFor="title">
            タイトル<span className="text-red-500">*</span>
          </label>
          <input
            className="w-full rounded-[3px] border px-[4px] py-[8px]"
            name="title"
            type="text"
          />
        </div>
        {state?.errors?.title &&
          state.errors.title.map((error) => (
            <div
              aria-live="polite"
              className="text-sm text-red-500"
              key={error}
            >
              {error}
            </div>
          ))}

        <div className="mt-[28px]">
          <label htmlFor="content">
            内容<span className="text-red-500">*</span>
          </label>
          <textarea
            className="w-full rounded-[3px] border px-[4px] py-[8px]"
            name="content"
          />
        </div>
        {state?.errors?.content &&
          state.errors.content.map((error) => (
            <div
              aria-live="polite"
              className="text-sm text-red-500"
              key={error}
            >
              {error}
            </div>
          ))}
        <div className="mt-[28px]">
          <SubmitButton />
        </div>
      </form>
    </div>
  )
}
