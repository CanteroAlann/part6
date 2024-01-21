
import { useDispatch, useSelector } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";



const AnecdoteList = () => {
    const anecdotes = useSelector((state) => state.anecdotes);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    const vote = (id) => {
        dispatch(addVote(id));
        dispatch(setNotification(`You voted for ${anecdotes.find((anecdote) => anecdote.id === id).content}`));
        setTimeout(() => {
            dispatch(setNotification(""));
        }, 5000);
    };

    return (
        <div>
            {anecdotes
                .filter((anecdote) => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
                .sort((a, b) => b.votes - a.votes)
                .map((anecdote) => (
                    <div key={anecdote.id}>
                        <div>{anecdote.content}</div>
                        <div>
                            has {anecdote.votes}{" "}
                            <button onClick={() => vote(anecdote.id)}>vote</button>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default AnecdoteList;