
import { createAnecdote } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";


const AnecdoteForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const content = event.target.anecdote.value;
        console.log(content);
        dispatch(createAnecdote(content));
        event.target.anecdote.value = "";
    };

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={handleSubmit}>
                <input name="anecdote" />
                <button type="submit">create</button>
            </form>
        </div>
    );
}

export default AnecdoteForm;
