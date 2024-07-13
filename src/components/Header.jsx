import { useState } from "react"
function Header() {

    const [open, setOpen] = useState(false)
   
    const menuOpen = () =>{
            setOpen(true)
    }

    const menuClose = () =>{
        setOpen(false)
    }
    return <div className="bg-primaryColor items-center font-poppin justify-between px-10 py-2 sm:flex text-white">
        <h1 className="text-5xl font-bold">Tech<span className="text-black">Book</span></h1>
       
        <i style={{display: open == true ? "none" : ""}} onClick={menuOpen} class="fa-solid fa-bars text-4xl absolute right-2 top-4 sm:hidden"></i>
        <i  style={{display: open == true ? "block" : ""}} onClick={menuClose}  class="fa-solid fa-xmark text-4xl absolute right-2 top-4  hidden"></i>
        
        <ul style={{display: open == true ? "block" : ""}} className="text-3xl sm:flex sm:mt-0 mt-4 hidden gap-4 sm:gap-10">
            <li>About us</li>
            <li>Home</li>
            <li>Service</li>
        </ul>
        
        <button style={{display: open == true ? "block" : ""}} className="bg-white px-6 py-3 text-orange-500 rounded mt-5 gap-10 sm:flex hidden">Registration</button>

       
    </div>
}

export default Header