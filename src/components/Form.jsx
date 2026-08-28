import { useState } from "react"

const Form = ({addtodo}) => {
 
    const [text, setText] = useState("")
    
  const handlesubmit = (e) => {
    e.preventDefault() 
    addtodo({id: crypto.randomUUID() , text: text})

  setText("")
  } 



    return (
        <form onSubmit={handlesubmit} className="p-4 rounded-md border border-red-900 shadow-md">
    <input value={text} required onChange={(e) => setText(e.target.value)} type="text" placeholder="Todo Here" className="border border-yellow-600 p-2 rounded-md w-full my-2" />
     <button className=" bg-yellow-500 hover:bg-yellow-300 cursor-pointer w-full p-2 rounded-md my-2 font-bold">Save</button>
    </form> 
    )
}
export default Form 
