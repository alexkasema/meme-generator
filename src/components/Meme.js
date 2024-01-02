
import React from "react"

import memesData from "../memesData"

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage(){
        const memesArray = memesData.data.memes
        
        const randomIndex = 
            Math.floor(Math.random() * memesArray.length);
        const randomUrl = memesArray[randomIndex].url;
        
        setMemeImage(randomUrl)
    }
    return (
        <main>
            <div className="meme--form">
                <input type="text" className="form--input" placeholder="Top Text" />
                <input type="text" className="form--input" placeholder="Bottom Text" />
                <button onClick={getMemeImage} className="form--button">Get a new meme image  🖼</button>
            </div>
            <img className="meme--image" src={memeImage} alt="meme" />
        </main>
    )
}
