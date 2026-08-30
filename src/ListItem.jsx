import { useContext } from "react"
import TodoContext from "./TodoContext"

const ListItem = ({todo}) => {

    const {removetodo,editTodo} = useContext(TodoContext)

    return(
        <li className=" relative border border-red-900 rounded-lg shadow-lg my-2 p-4 ">
        <p className="text-red-900"> #{todo.id} </p>
         <h1 className="text-xl font-bold my-2 ">{todo.text}</h1>
         <div className=" absolute flex space-x-2 right-2 bottom-2 ">
          <button onClick={() => editTodo(todo)} className="bg-yellow-400 rounded-md cursor-pointer p-2 text-sm font-bold">Edit</button>
         <button onClick={() => removetodo(todo.id)} className="bg-red-600 rounded-md cursor-pointer p-2 text-sm font-bold">Delete</button>
         </div>
      </li>
    )
}
export default ListItem 