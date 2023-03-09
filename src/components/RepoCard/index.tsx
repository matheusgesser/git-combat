import React from 'react'
import { BsBook } from "react-icons/bs"
import { FaCodeBranch, FaDownload, FaStar } from "react-icons/fa"
import { TbPageBreak } from "react-icons/tb"
import { VscCommentDiscussion, VscIssues, VscProject } from "react-icons/vsc"
import { truncate } from '../../utils'
import './repocard.css'

interface RepoCardProps {
  number: number
  content: Repo
  handler: (r: Repo) => void
}

const RepoCard: React.FC<RepoCardProps> = ({ number, content, handler }) => {
  return (
    <section className={number == 1 ? 'repo invertfloat' : 'repo float'} onClick={() => handler(content)}>
      <section className="repo-header">
        <img className='avatar' src={content.owner.avatar_url} />
        <h2 className='repo-title'>
          {content.owner.login}/<strong>{content.name}</strong>
        </h2>
      </section>
      <p className='repo-desc'>{truncate(content.description, 72)}</p>
      <aside className="info">
        <ul className="topics">
          {content.topics.map(topic => (
            <li className='topic' key={topic}>{topic}</li>
          ))}
        </ul>
      </aside>
      <section className="has">
        <ul className='booleans'>
          <li className='item'>
            <TbPageBreak className={`item-${content.has_pages}`} />
          </li>
          <li className='item'>
            <VscIssues className={`item-${content.has_issues}`} />
          </li>
          <li className='item'>
            <VscCommentDiscussion
              className={`item-${content.has_discussions}`}
            />
          </li>
          <li className='item'>
            <BsBook className={`item-${content.has_wiki}`} />
          </li>
          <li className='item'>
            <FaDownload className={`item-${content.has_downloads}`} />
          </li>
          <li className='item'>
            <VscProject className={`item-${content.has_projects}`} />
          </li>
        </ul>
      </section>
    </section>
  )
}

export default RepoCard