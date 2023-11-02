import Environment from './components/environment/Environment'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import WrittenText from './components/written-text/WrittenText'
import styles from './page.module.scss'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <Environment></Environment> */}
      <Header></Header>
      <Hero></Hero>
      {/* <About></About>
      <Curriculum></Curriculum>
      <Interests></Interests>
      <Contact></Contact> */}
    </main>
  )
}
