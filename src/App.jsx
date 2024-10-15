import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { Pets } from './components/Pets'
import { Donate } from './components/Donate'
import { Visit } from './components/Visit'
import { useSlowScroll } from './hooks/useSlowScroll'

function App() {
  useSlowScroll();

  return (
    <>
      <Header />
      <main className='font-mono'>
        <About />
        <Pets />
        <Donate />
        <Visit />
      </main>
      <Footer />
    </>
  )
}

export default App
