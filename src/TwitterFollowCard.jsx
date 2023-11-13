import { useState } from "react"

export const TwitterFollowCard = ({ children, userName, initialIsFollowing }) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'seguir'
  const buttonClassName = isFollowing ? 'btn-follow isFollowing' : 'btn-follow'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className="follow-card">
      <img src={`https://unavatar.io/${userName}`} alt={userName} />
      <section className='card-info-user'>
        <h2>{children}</h2>
        <p>@{userName}</p>
      </section>
      <section className='card-btn'>
        <button onClick={handleClick} className={buttonClassName}>
          <span className="following">{text}</span>
          <span className="stopfollow">Dejar de seguir</span>
        </button>
      </section>
    </article>
  )
}
