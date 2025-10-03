import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import TheGarage from './Garage/TheGarage'
import LoadingScreen from './LoadingScreen/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      <div className="portfolio-container">
        <header className="portfolio-header">
          <h1 className="portfolio-title">Racing Portfolio</h1>
          <p className="portfolio-subtitle">Full Throttle Development</p>
        </header>
        
        <main className="portfolio-main">
          <Hero />
          <TheGarage />
        </main>
      </div>
    </>
  )
}

export default App
