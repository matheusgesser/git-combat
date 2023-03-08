import React, { useEffect, useState } from 'react'
import RepoCard from '../RepoCard'
import './game.css'

interface GameProps {
  repoState: [Repo[],React.Dispatch<React.SetStateAction<Repo[]>>]
  originalList: Repo[]
  setShowGame: React.Dispatch<React.SetStateAction<boolean>>
}

const Game: React.FC<GameProps> = ({repoState, originalList, setShowGame}) => {

  const [over, setOver] = useState<boolean>(false)
  const [round, setRound] = useState<number>(1)
  const [resultShown, setResultShown] = useState<boolean>(false)
  const [repo1, setRepo1] = useState<Repo | null>(null)
  const [repo2, setRepo2] = useState<Repo | null>(null)

  useEffect(() => {
    setRepo1(originalList[0])
    setRepo2(originalList[1])
  }, [])

  function handleChoice(r:Repo) {

  }

  return (
    <section className='game'>
      {over ? (
        <aside className='score'></aside>
      ) : (
        repo1 &&
        repo2 && (
          <section className="repos">
            <h4>Round {round}</h4>
            <h1 className='title'>
              Which one wins the star battle?
            </h1>
            <section className='container'>

                <RepoCard content={repo1} handler={handleChoice} />

                <span className='versus'>VS</span>

                <RepoCard content={repo2} handler={handleChoice} />

            </section>

            <section className="buttons">
              <button className='back btn' style={{background: 'var(--color-penn-red)'}}>BACK</button>
              <button className='next btn' style={{background: resultShown ? '#888' : '#111'}}>
                NEXT
              </button>
            </section>

          </section>
        )
      )}
    </section>
  )
}

export default Game