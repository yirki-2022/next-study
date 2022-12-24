import React from 'react'
import Menu from './Menu'
import Title from './Title'

export function Header() {
  return (
    <div className="bg-slate-100 row-span-1 flex flex-row h-full shadow-md shadow-cyan-200/20">
      <Title />
      <Menu />
    </div>
  )
}
