import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Bottom from './components/Bottom'
import NewFooter from './components/NewFooter'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Bottom />
      </main>
      <NewFooter />
    </>
  )
}

export default App
