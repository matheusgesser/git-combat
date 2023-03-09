import React, { useEffect, useState } from 'react'
import { FaCheckCircle, FaExchangeAlt, FaTimesCircle } from "react-icons/fa"
import RepoCard from '../RepoCard'
import './game.css'

interface GameProps {
  repoState: [Repo[], React.Dispatch<React.SetStateAction<Repo[]>>]
  originalList: Repo[]
  setShowGame: React.Dispatch<React.SetStateAction<boolean>>
}

const Game: React.FC<GameProps> = ({ repoState, originalList, setShowGame }) => {

  const [repositories, setRepositories] = repoState
  const [over, setOver] = useState<boolean>(false)
  const [round, setRound] = useState<number>(1)
  const [resultShown, setResultShown] = useState<boolean>(false)
  const [repo1, setRepo1] = useState<Repo | null>(null)
  const [repo2, setRepo2] = useState<Repo | null>(null)
  const [correct, setCorrect] = useState<number>(0)
  const [incorrect, setIncorrect] = useState<number>(0)

  function randomSelect(arr: Repo[]) {
    if (arr.length < 2) {
      setRepositories(originalList)
      setOver(true)
      setRound(1)
      return
    }
    function getRandomIndex() {
      return Math.floor(Math.random() * arr.length)
    }
    const randomIndex1 = getRandomIndex()
    let randomIndex2 = getRandomIndex()
    while (randomIndex1 === randomIndex2) {
      randomIndex2 = getRandomIndex()
    }
    let randomRepo1 = arr[randomIndex1]
    let randomRepo2 = arr[randomIndex2]
    const updatedArray = arr.filter(repo => repo.id != randomRepo1.id && repo.id != randomRepo2.id)
    setRepo1(randomRepo1)
    setRepo2(randomRepo2)
    setRepositories(updatedArray)
  }

  useEffect(() => {
    randomSelect(repositories)
  }, [])

  function handleChoice(r: Repo) {
    const chosenRepo = r.id === repo1?.id ? repo1 : repo2
    const winner = repo1?.stargazers_count! > repo2?.stargazers_count! ? repo1 : repo2

    if (chosenRepo?.id == winner?.id) {
      setCorrect(prev => prev + 1)
      document.getElementsByTagName('audio')[0].currentTime = 0
      document.getElementsByTagName('audio')[0].play()
    } else {
      setIncorrect(prev => prev + 1)
      document.getElementsByTagName('audio')[1].currentTime = 0
      document.getElementsByTagName('audio')[1].play()
    }

    setRound(prev => prev + 1)
    randomSelect(repositories)
  }

  return (
    <section className='game'>
      {over ? (
        <section className='score'>
          <section className='container'>
            <p className='text'>Final Score:</p>
            <section className='result correct'>
              <p>{correct}</p>
              <FaCheckCircle />
            </section>
            <section className='result wrong'>
              <p>{incorrect}</p>
              <FaTimesCircle />
            </section>
          </section>
          <button className='play-btn' onClick={() => setShowGame(false)}>BACK</button>
        </section>
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

          </section>
        )
      )}
    </section>
  )
}

export default Game