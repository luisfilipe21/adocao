import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { Pets } from './components/Pets'
import { Donate } from './components/Donate'

function App() {

  return (
    <>
      <main className='font-mono'>
        <Header />
        <About />
        <Pets />
        <Donate />
        <Footer />
      </main>
    </>
  )
}

export default App
