import { useState } from 'react'
import './App.css'
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
          <section className="hero-section">
            <div className="hero-content">
              <h2>Welcome to the Fast Lane</h2>
              <p>Where speed meets precision in web development</p>
            </div>
          </section>
          
          <section className="content-section">
            <h3>Portfolio Content Coming Soon</h3>
            <p>This is where your racing-themed portfolio content will go.</p>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
