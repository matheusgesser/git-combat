import React, { useState } from 'react'
import './styles/base.css'

export default function App() {
  const [showGame, setShowGame] = useState<boolean>(false)
  const [repos, setRepos] = useState(['s'])

  return (
    <main>
      {!showGame && (
        <>
          <h1>Welcome to GitCombat</h1>
          <h2>Live star battle of random famous Github repositories</h2>
          {repos.length == 0 ? (
            <p>Loading...</p>
          ) : (
            <button type='submit' onClick={() => setShowGame(true)}>Play</button>
          )}
        </>
      )}
      {showGame && (
        // TODO: Create Game Component
        <>
          <h1>Game</h1>
        </>
      )}
    </main>
  )
}