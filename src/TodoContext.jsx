import { createContext } from "react";
import { useState } from "react"

const TodoContext = createContext()

export const TodoProvider = ({children}) => {



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

    return(
        <TodoContext.Provider value={{todos,edit,clearAll,updateTodo,editTodo,addtodo,removetodo,changetheme,dark}}>
            {children}
        </TodoContext.Provider>
    )
}


export default TodoContext
