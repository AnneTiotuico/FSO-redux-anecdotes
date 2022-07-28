import { connect } from 'react-redux'
import { incrementVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const anecdotes = props.anecdotes

  const vote = (id) => {
    const voted = anecdotes.find(a => a.id === id)

    props.incrementVote(id, voted)
    props.setNotification(`you voted '${voted.content}'`)
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

const mapStateToProps = state => {
  if (state.filter === '') {
    return {
      anecdotes: [...state.anecdotes].sort((a, b) => b.votes - a.votes)
    }
  }
  
  return {
    anecdotes: state.anecdotes.filter(a => a.content.toLowerCase().includes(state.filter.toLowerCase())).sort((a, b) => b.votes - a.votes)
  }
}

export default connect(
  mapStateToProps,
  { incrementVote, setNotification}
)(AnecdoteList)
