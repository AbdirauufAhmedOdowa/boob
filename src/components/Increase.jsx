import { useState } from "react"

function Increase() {

    const [counter, setCounter] = useState(0)
    const INCREAMENTbtn = ()=>{
        setCounter(counter + 1)
    }

    const DECREAMENTbtn = () =>{
        if (counter > 0)
        setCounter(counter -1)
    }


    const resetbtn = () =>{
        setCounter(0)
    }

    return <div className="text-center pt-40">
            <h1 className="text-center text-8xl font-bold ">{counter} </h1>
            <button onClick={INCREAMENTbtn} className="bg-violet-950 w-[100px] h-[40px] rounded-md m-3 text-white">Increase</button>
            <button onClick={DECREAMENTbtn} className="bg-violet-950 w-[100px] h-[40px] rounded-md m-3 text-white">Decreament</button>
            <button onClick={resetbtn} className="bg-violet-950 w-[100px] h-[40px] rounded-md m-3 text-white">Reset</button>
    </div>
}
export default Increase