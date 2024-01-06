
import React from "react"

export default function Meme() {

    // const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/1ur9b0.jpg")

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1ur9b0.jpg"
    })
   
    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {

        async function getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemeImages(data.data.memes)
        }
        
        getMemes()
    }, [])

    function getMemeImage(){

        const memesArray = allMemeImages
        
        const randomIndex = 
            Math.floor(Math.random() * memesArray.length);
        const randomUrl = memesArray[randomIndex].url;
        
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: randomUrl
            }
        })    
    }

    function handleChange(event) {
        const {name, value} = event.target

        setMeme(prevMeme => {
            return{
                ...prevMeme, 
                [name]: value
            }
        })
    }
    return (
        <main>
            <div className="meme--form">
                <input 
                    type="text" className="form--input" placeholder="Top Text" name="topText" 
                    value={meme.topText} onChange={handleChange}
                />
                <input type="text" className="form--input" placeholder="Bottom Text" name="bottomText" 
                    value={meme.bottomText} onChange={handleChange} />
                <button onClick={getMemeImage} className="form--button">Get a new meme image  🖼</button>
            </div>
            <div className="meme">
                <img className="meme--image" src={meme.randomImage} alt="meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
