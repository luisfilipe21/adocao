import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { Pets } from './components/Pets'
import { Donate } from './components/Donate'
import { Visit } from './components/Visit'
import { useSlowScroll } from './hooks/useSlowScroll'
import { Welcome } from './components/Welcome'

function App() {
  useSlowScroll();

  return (
    <>
      <Header />
      <main className='font-inconsolata relative z-0'>
        <Welcome />
        <About />
        <Pets />
        <Donate />
        <Visit />
        <div className="absolute bg-bgImage2 bg-contain w-full h-full bg-repeat top-40 opacity-10 z-10"></div>
      </main>
      <Footer />
    </>
  )
}

export default App
