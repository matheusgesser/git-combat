import React, { ReactComponentElement, useEffect, useState } from 'react'
import './styles.jsx'

interface GameProps {
  repoState: [Repo[],React.Dispatch<React.SetStateAction<Repo[]>>]
  originalList: Repo[]
  setShowGame: React.Dispatch<React.SetStateAction<boolean>>
}

const Game: React.FC<GameProps> = ({repoState, originalList, setShowGame}) => {

  const [over, setOver] = useState<boolean>(false)
  const [repo1, setRepo1] = useState<Repo | null>(null)
  const [repo2, setRepo2] = useState<Repo | null>(null)

  useEffect(() => {
    setRepo1(originalList[0])
    setRepo2(originalList[1])
  }, [])

  return (
    <section className='game'>
      {over ? (
        <aside className='score'></aside>
      ) : (
        repo1 && repo2 && (
          <section className='repos'>
            <h1 className='title'>
              Which one wins the star battle?
            </h1>

            <section className="container">
              {/* // TODO: Create Component for the Repo */}
              <h1>
                {repo1.owner.login}/{repo1.name}
              </h1>
            </section>

            <section className="dashboard">
              <h4>Round 1</h4>
              <span>VS</span>
              <button>BACK</button>
              <button>NEXT</button>
            </section>

            <section className="container">
              <h1>
                {repo2.owner.login}/{repo2.name}
              </h1>
            </section>

          </section>
        )
      )}
    </section>
  )
}

export default Game