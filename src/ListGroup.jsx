import ListItem from "./ListItem"

const ListGroup = ({todos , clearAll, removetodo} ) => {
    return(
      <> 
         <button onClick={clearAll} className="bg-red-500 hover:bg-red-300 cursor-pointer w-full p-2 rounded-md my-2 text-white font-bold">ClearAll</button>

         <ul className="my-4">
      {
        todos.map(todo => {
            return<ListItem key={todo.id} todo={todo} removetodo={removetodo} />
        })
      }
    </ul>
    </>
    )
}  
export default ListGroup  