import { useEffect, useRef } from 'react'
import Environment from './components/environment/Environment'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import styles from './page.module.scss'
import locomotiveScroll from "locomotive-scroll"
import { SmoothScrollProvider } from './utils/SmoothScroll.context'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Curriculum from './components/curriculum/Curriculum'
import Interests from './components/interests/Interests'


export default function Home() {

  return (
    <SmoothScrollProvider options={{ smooth: true }}>

      <main data-scroll-container className="page flex min-h-screen flex-col items-center justify-between">
        <Environment></Environment>
        <Header></Header>
        <Hero data-scroll data-scroll-speed="3" data-scroll-position="top"></Hero>
        <About></About>
        <Curriculum></Curriculum>
        <Interests></Interests>
        <Contact></Contact>
      </main>
      </SmoothScrollProvider>
  )
}
