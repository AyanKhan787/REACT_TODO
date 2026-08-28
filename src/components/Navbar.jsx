import Logo from "../assets/react.svg"
 
const Navbar = ({changetheme}) => {
    return (
        <nav className=" bg-red-950 shadow-xl shadow-black/15 py-2 px-8 flex items-center justify-between" >
       <div className="flex space-x-2 items-center">
         <img src={Logo} alt="" />    
  <h1 className="text-white font-bold uppercase">React TODO</h1>
       </div>
       <button onClick={changetheme} className="px-2 py-1.5 font-bold text-white bg-violet-600 rounded-xl">Change Theme</button>
 </nav>
    )
}
export default Navbar