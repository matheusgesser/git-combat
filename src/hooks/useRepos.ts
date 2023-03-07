import { Dispatch, SetStateAction, useEffect, useState } from "react";

async function fetchRepos( amount:number, setters:Dispatch<SetStateAction<any[]>>[] ) {
  const res = { data: ['repo', 'repo2'] }
  setters.forEach(setter => setter(res.data))
}

export default function useRepos(amount:number) {
  const [allRepos, setAllRepos] = useState<any>([])
  const [repositories, setRepositories] = useState<any>([])

  useEffect(() => {
    fetchRepos(amount, [setAllRepos, setRepositories])
  }, [repositories, setRepositories, allRepos])

  return [repositories, setRepositories, allRepos]
}