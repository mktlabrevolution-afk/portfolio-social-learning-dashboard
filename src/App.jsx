import { useState } from 'react'
import Header from './components/Header'
import KPICards from './components/KPICards'
import MarketOverlap from './components/MarketOverlap'
import GapAnalysis from './components/GapAnalysis'
import StrategicInfographic from './components/StrategicInfographic'
import BlindSpots from './components/BlindSpots'

function App() {
  return (
    <div className="container">
      <Header />
      
      <main className="flex flex-col gap-xl">
        {/* KPI Overview */}
        <section className="animate-fade-in delay-100">
          <KPICards />
        </section>

        {/* Market Overlap & Commodities */}
        <section className="animate-fade-in delay-200">
          <MarketOverlap />
        </section>

        {/* Gaps (Where we are missing) */}
        <section className="animate-fade-in delay-300">
          <GapAnalysis />
        </section>
        
        {/* Trends & Infographic */}
        <section className="animate-fade-in delay-300">
          <StrategicInfographic />
        </section>

        {/* AI Blind Spots */}
        <section className="animate-fade-in delay-300">
          <BlindSpots />
        </section>
      </main>
    </div>
  )
}

export default App
