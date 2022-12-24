import React from 'react'

export default function Menu() {
  return (
    <div className="flex flex-row-reverse basis-6/12">
      <div className="mx-4 my-8 truncate text-stone-600 h-full cursor-pointer hover:text-sky-400  ">
        自己紹介
      </div>
      <div className="mx-4 my-8 truncate text-stone-600 h-full cursor-pointer hover:text-sky-400 ">
        勉強メモ
      </div>
      <div className="mx-4 my-8 truncate text-stone-600 h-full cursor-pointer hover:text-sky-400 ">
        よく使うサイト
      </div>
    </div>
  )
}
