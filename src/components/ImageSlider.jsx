import { useState } from "react"
function ImageSlider() {

    const [index, setIndex] = useState (0)

    const handleNextImage = () =>{
        if(index < images.length -1){
            setIndex(index + 1)
        }
    }

    const handlePreaveImage = () =>{
        if(index > 0)
        setIndex(index - 1)
    }

    const images =[

        "https://img.freepik.com/free-photo/animal-lizard-nature-multi-colored-close-up-generative-ai_188544-9072.jpg?t=st=1720854425~exp=1720858025~hmac=a91a4ccf8dd92bde0c49915edc1a3835ffa4d8c0357b4d5c9e3ab53e080282b9&w=1060",

        "https://img.freepik.com/premium-photo/snake-clear-green-forest_807701-4682.jpg?w=740",

        "https://img.freepik.com/premium-photo/colorful-bird-with-blue-eye-black-background_807701-4268.jpg?w=740",

        "https://img.freepik.com/premium-photo/emerald-dark-background_807701-4029.jpg?w=740"

    ]



    return <div className="text-center">
        <div className="flex justify-center">
           <img className="bg-primaryColor w-[350px] h-[250px] sm:w-[900px] sm:h-[390px] object-cover mt-20 rounded-md" src={images[index]} />
        </div>
        <button onClick={handleNextImage} className="bg-secondaryColor  px-8 py-3  m-3  sm:px-16 sm:py-4 sm:m-5 text-white text-3xl ">Nextm</button>
        <button onClick={handlePreaveImage} className="bg-secondaryColor px-8 py-3 m-3 sm:m-5 sm:px-16 sm:py-4 text-white text-3xl ">Preave</button>
    </div>
}
export default ImageSlider