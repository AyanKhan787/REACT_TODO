import { useState } from "react"
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import ListGroup from "./ListGroup"

const App = () => {

    const [dark, setdark] = useState(false)
   
  const changetheme = () => {
    setdark(!dark)
  }

  const [todos, settodos] = useState([
    {
      id: 1,
      text: "Wake Up",
    },
     {
      id: 2,
      text: "Eat",
    },
     {
      id: 3,
      text: "Sleep",
    },
    {
      id: 4,
      text: "Play Games"
    }
  ])
  
  const clearAll = () => {
   settodos([])
  }

   const removetodo = (id) => {
    settodos(todos.filter(todo => todo.id !== id))
   }
  
   const addtodo = (newtodo) => {
    settodos([newtodo, ...todos])
   }

  return (
 <>
 <Navbar changetheme={changetheme}/>
<div className={dark ? "bg-gray-800 text-white" : "p-8" }>
  <Form addtodo={addtodo}/>
   <ListGroup todos={todos}  clearAll={clearAll} removetodo={removetodo} />
</div>

  </>
  )
}
export default App