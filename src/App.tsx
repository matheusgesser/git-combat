import React, { useState } from 'react'
import { useRepos } from './hooks'
import { Game } from './components'

import './styles/base.css'
import './styles/home.css'
import './styles/animations.css'

import correctAnswerAudio from './assets/correct-answer.wav'
import wrongAnswerAudio from './assets/wrong-answer.wav'

export default function App() {
  const [showGame, setShowGame] = useState<boolean>(false)
  const [repos, setRepos, allRepos] = useRepos(30)

  return (
    <>
      <div className="background">
        <div className="stars1"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      <main>
        {!showGame && (
          <>
            <strong className='title floatnoskew'>GitCombat</strong>
            <p className='description floatnoskew'>A pair of random GitHub repositories put against each other, guess which one has more stars using your open source projects knowledge</p>
            {repos.length == 0 ? (
              <p className='loading pulsate-bck'>Loading...</p>
            ) : (
              <button type='submit' onClick={() => setShowGame(true)} className='play-btn jello-horizontal'>
                PLAY
              </button>
            )}
          </>
        )}
        {showGame && (
          <Game
            repoState={[repos, setRepos]}
            originalList={allRepos}
            setShowGame={setShowGame} />
        )}
        <audio id='correct-answer-audio' src={correctAnswerAudio} ></audio>
        <audio id='wrong-answer-audio' src={wrongAnswerAudio} ></audio>
      </main>
    </>
  )
}