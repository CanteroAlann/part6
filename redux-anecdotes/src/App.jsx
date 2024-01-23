import { useEffect } from 'react'
import AnecdoteList from './components/anecdoteList'
import AnecdoteForm from './components/anecdoteForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer'



const App = () => {

  useEffect(() => {
    initializeAnecdotes()
  }, [])


  return (
    <div>
      <Filter />
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App