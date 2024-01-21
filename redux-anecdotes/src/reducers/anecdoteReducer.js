/* eslint-disable no-case-declarations */
import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../service/anecdotes"


const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    addVote(state, action) {
      const id = action.payload
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote
      )
    },
    addAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { addVote, addAnecdote, setAnecdotes } = anecdoteSlice.actions

export const createAnecdote = (content) => {
  return async dispatch => {
    console.log(content)
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(addAnecdote(newAnecdote))
  }
}
export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const voteAnecdote = (id) => {
  return async dispatch => {
    const anecdoteToVote = await anecdoteService.getOne(id)
    anecdoteToVote.votes += 1
    const updatedAnecdote = await anecdoteService.update(anecdoteToVote)
    dispatch(addVote(updatedAnecdote.id))
  }
}

export default anecdoteSlice.reducer