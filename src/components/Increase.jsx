import { useState } from "react"
function Increase() {

   const[counter, setCounter] = useState (0)

   const increamentCounter = () =>{
     setCounter (counter + 1)
    if (counter === 0){
        document.body.style.backgroundColor = "blue"
    }
    else if (counter === 1){
        document.body.style.backgroundColor = "red"
    }
    else if (counter === 2 ){
        document.body.style.backgroundColor = "yellow"
    }
    else{
        document.body.style.backgroundColor = "white"
    }

   }

   const decreamentCounter = () =>{
    if(counter > 0){
        setCounter(counter - 1)
    }

    if (counter === 4){
        document.body.style.backgroundColor = "blue"
    }
    else if (counter === 3){
        document.body.style.backgroundColor = "red"
    }
    else if (counter === 2 ){
        document.body.style.backgroundColor = "yellow"
    }
    else{
        document.body.style.backgroundColor = "white"
    }

}


     const resetCounter = () =>{
        setCounter (0)
     }

    return <div className="flex justify-center">
        <div className="mt-[200px]">
            <h1 className="text-center text-8xl font-bold ">{counter}</h1>

            <button onClick={increamentCounter} className="bg-violet-950 w-[100px] h-[40px] rounded-md m-3 text-white">Increase</button>
            <button onClick={decreamentCounter} className="bg-violet-950 w-[100px] h-[40px] rounded-md m-3 text-white">Decreament</button>
            <button onClick={resetCounter} className="bg-violet-950 w-[100px] h-[40px] rounded-md m-3 text-white">Reset</button>

        </div>


    </div>
}

export default Increase