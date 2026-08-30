import { useContext } from "react"
import ListItem from "./ListItem"
import TodoContext from "./TodoContext"

const ListGroup = () => {

  const {todos,clearAll} = useContext(TodoContext)

    return(
      <> 
         <button onClick={clearAll} className="bg-red-500 hover:bg-red-300 cursor-pointer w-full p-2 rounded-md my-2 text-white font-bold">ClearAll</button>

         <ul className="my-4">
      {
        todos.map(todo => {
            return<ListItem key={todo.id} todo={todo} />
        })
      }
    </ul>
    </>
    )
}  
export default ListGroup  