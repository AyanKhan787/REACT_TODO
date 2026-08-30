import { useContext, useState } from "react"
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import ListGroup from "./ListGroup"
import TodoContext from "./TodoContext"

const App = () => {

    const {dark} = useContext(TodoContext)
  return (
 <>
 <Navbar />
<div className={dark ? "bg-gray-800 text-white" : "p-8" }>
  <Form />
   <ListGroup  />
</div>

  </>
  )
}
export default App