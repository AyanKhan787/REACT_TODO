import { useState } from "react"
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import ListGroup from "./ListGroup"

const App = () => {

    const [dark, setdark] = useState(false)
   
  const changetheme = () => {
    setdark(!dark)
  }

  const [todos, settodos] = useState([])
  
  const clearAll = () => {
   settodos([])
  }

   const removetodo = (id) => {
    settodos(todos.filter(todo => todo.id !== id))
   }
  
   const addtodo = (newtodo) => {
    settodos([newtodo, ...todos])
   }

   const [edit , setEdit] = useState({
    todo : {},
    isEdit : false
   })

   const editTodo = (todo) => {
    setEdit({
      todo: todo,
      isEdit: true
    })
   }

 const updateTodo = (updatedTodo) => {
  settodos(todos.map(todo => {
    if(todo.id === updatedTodo.id ) {
      return(updatedTodo)
    }
    else{
      return(todo)
    }
  }))
  
  setEdit({
    todo:{},
    isEdit: false
  })

 }





  return (
 <>
 <Navbar changetheme={changetheme}/>
<div className={dark ? "bg-gray-800 text-white" : "p-8" }>
  <Form addtodo={addtodo} edit={edit} updateTodo={updateTodo}/>
   <ListGroup todos={todos}  clearAll={clearAll} removetodo={removetodo} editTodo={editTodo} />
</div>

  </>
  )
}
export default App