import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { Pets } from './components/Pets'
import { Donate } from './components/Donate'

function App() {

  return (
    <>
      <Header />
      <main className='max-w-[1280px] p-8'>
        <About />
        <Pets />
        <Donate />
      </main>
      <Footer />
    </>
  )
}

export default App
