import Environment from './components/environment/Environment'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import styles from './page.module.scss'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Curriculum from './components/curriculum/Curriculum'
import Interests from './components/interests/Interests'
import { SmoothScrollProvider } from './utils/SmoothScroll.context'


export default function Home() {

  return (
    <>
      <SmoothScrollProvider options={{ smooth: true }}>
        <Header></Header>
        <main data-scroll-container data-scroll-section id='main'>
          <Environment></Environment>
          <div>
              <Hero></Hero>
              <About></About>
              <Curriculum></Curriculum>
              <Interests></Interests>
              <Contact></Contact>
          </div>
        </main>
      </SmoothScrollProvider>
    </>
  )
}
