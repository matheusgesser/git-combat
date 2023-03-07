import { Octokit } from '@octokit/core'

const token = import.meta.env.VITE_GITHUB_TOKEN

const octokit:Octokit = new Octokit({
  auth: "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",
})

export default octokit