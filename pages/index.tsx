import React from 'react'
import { Header } from '../components/Header'
import { MainArea } from '../components/MainArea'

export default function index() {
  return (
    <div className="h-screen grid grid-rows-16 gap-2">
      <Header />
      <MainArea />
    </div>
  )
}
