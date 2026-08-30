import { useEffect, useState } from 'react'

function mapRepo(repo) {
  const topicList = repo.topics || []
  return {
    name: repo.name,
    description: repo.description || 'No description provided.',
    tech: repo.language ? [repo.language] : [],
    topics: topicList,
    link: repo.homepage || null,
    code: repo.html_url,
    github: true,
    isPrivate: repo.private,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
  }
}

export function useGithubRepos(config) {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    if (!config || !config.enabled || !config.githubUsername) {
      setLoading(false)
      return
    }

    const username = config.githubUsername
    const perPage = config.perPage || 100
    const topics = config.topics || []
    const manual = config.manualRepos || []

    const url = `https://api.github.com/users/${username}/repos?per_page=${perPage}&sort=updated`

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API error ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        const list = Array.isArray(data) ? data : []
        const manualSet = new Set(manual)
        const filtered = list.filter((repo) => {
          const t = repo.topics || []
          const inTopics = topics.some((topic) => t.includes(topic))
          return inTopics || manualSet.has(repo.name)
        })
        setRepos(filtered.map(mapRepo))
        setLoading(false)
      })
      .catch((err) => {
        if (cancelled) return
        setError(err.message)
        setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [config])

  return { repos, loading, error }
}
