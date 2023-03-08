import React, { useState } from 'react'
import { useRepos } from './hooks'

import './styles/base.css'
import './styles/home.css'
import './styles/animations.css'

export default function App() {
  const [showGame, setShowGame] = useState<boolean>(false)
  const [repos, setRepos, allRepos] = useRepos(100)

  return (
    <main>
      {!showGame && (
        <>
          <strong>GitCombat</strong>
          <p>A pair of random GitHub repositories against each other, you guess which one has more stars using your knowledge of programming languages and open source projects.</p>
          {repos.length == 0 ? (
            <p className='pulsate-bck'>Loading...</p>
          ) : (
            <button type='submit' onClick={() => setShowGame(true)} className='jello-horizontal'>
              PLAY
            </button>
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