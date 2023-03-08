import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { githubClient } from "../api";

const randomSince = Math.floor(Math.random() * 1000000)

async function fetchRepos( amount:number, setters:Dispatch<SetStateAction<any[]>>[] ) {
  const res = await githubClient.request("GET /search/repositories", {
    q: `is:public stars:>1000 fork:false`,
    sort: 'stars',
    order: 'desc',
    per_page: amount,
    since: randomSince,
    page: 1,
  })
  setters.forEach(setter => setter(res.data.items))
}

export default function useRepos(amount:number) {
  const [allRepos, setAllRepos] = useState<any>([])
  const [repositories, setRepositories] = useState<any>([])

  useEffect(() => {
    fetchRepos(amount, [setAllRepos, setRepositories])
  }, [repositories, setRepositories, allRepos])

  return [repositories, setRepositories, allRepos]
}