import { useState } from "react"
function Header() {

    const [isOpen, SetIsOpen] = useState(false)

    //handle menu
    const handleOpenMenu = () => {
        SetIsOpen(true)
    }
    // handle close menu
    const handleCloseMenue = () =>{
        SetIsOpen(false)
    }
    return <div className="bg-orange-500 items-center sm:flex justify-between px-10 py-4 text-white">
        <h1 className="sm:text-3xl text-5xl font-bold">Tech<span className="text-black">Book</span></h1>
       
        <i style={{ display: isOpen == true ? "none" : ""}} onClick={handleOpenMenu} class="fa-solid fa-bars text-4xl absolute right-2 top-4 sm:hidden"></i>
        <i onClick={handleCloseMenue}  style={{ display: isOpen == true ? "flex" : ""}} class="fa-solid fa-xmark text-4xl absolute right-2 top-4 hidden"></i>

        <ul style={{ display: isOpen == true ? "flex" : "" }} className="hidden sm:flex flex-col sm:flex-row text-3xl sm:gap-10 gap-2 sm:mt-5 mt-0 ">
            <li>About us</li>
            <li>Home</li>
            <li>Service</li>
        </ul>
        
        <button style={{ display: isOpen == true ? "flex" : "" }} className="bg-white hidden sm:flex px-6 py-3 text-orange-500 rounded mt-5 sm:m-0">Registration</button>

       
    </div>
}

export default Header