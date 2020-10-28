import React from 'react'
import { HomeContainer } from './pages/home'

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">
        <HomeContainer />
      </header>
    </div>
  )
}
