import { useDispatch, useSelector } from "react-redux";
import {removeItem} from "../actions";
const ListTodo = () => {
    const dispatch = useDispatch();
    const todo = useSelector((state)=> state.todo);
    return (
        <div>
            {todo.map((todo, index)=>(
                <div>
                    <h5 style={{display: "inline-block"}}>{todo.title}</h5>
                    <button className="button1" onClick={() => {
                        dispatch(removeItem(index));
                    }}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default ListTodo;