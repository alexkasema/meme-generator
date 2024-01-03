
import React from "react"

import memesData from "../memesData"

export default function Meme() {

    // const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/1ur9b0.jpg")

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1ur9b0.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        
        const randomIndex = 
            Math.floor(Math.random() * memesArray.length);
        const randomUrl = memesArray[randomIndex].url;
        
        setMeme(prevMeme => {
            return{...prevMeme, randomImage: randomUrl}
        })
    }
    return (
        <main>
            <div className="meme--form">
                <input type="text" className="form--input" placeholder="Top Text" />
                <input type="text" className="form--input" placeholder="Bottom Text" />
                <button onClick={getMemeImage} className="form--button">Get a new meme image  🖼</button>
            </div>
            <img className="meme--image" src={meme.randomImage} alt="meme" />
        </main>
    )
}
