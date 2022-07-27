import { useDispatch, useSelector } from 'react-redux'
import { incrementVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    if (filter !== '') {
      return [...anecdotes].filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
                           .sort((a, b) => b.votes - a.votes)
    }
    return [...anecdotes].sort((a, b) => b.votes - a.votes)
  })

  const vote = (id) => {
    const voted = anecdotes.find(a => a.id === id)

    dispatch(incrementVote(id, voted))
    
    dispatch(setNotification(`you voted '${voted.content}'`, 10))
  }

  return(
    <>
    {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList