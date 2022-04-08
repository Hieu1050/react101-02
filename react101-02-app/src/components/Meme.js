import { useState } from "react";
import memesData from "../memesData"
export default function Meme (){
    const [meme, setMeme] = useState (
        {
            "topText": "",
            "bottomText": "",
            "randomImage": "http://i.imgflip.com/1bij.jpg"
        }
    ) // hook state to a dictionary object meme with 3 keys
    const [allMemeImages, setAllMemeImages] = useState (memesData) 
    
    function handleClick (){
        // 1- get a new image url for the meme by picking a random index
        let data_len = allMemeImages.data.memes.length
        let random_image_url = allMemeImages.data.memes[
            Math.floor (Math.random () * data_len)
        ].url

        // 2- set the new url for the meme object, while keeping the topText and bottomText the same
        setMeme (prevMeme => ({
            ...prevMeme, // get all the properties of the object
            randomImage : random_image_url // change the image url
        }))
        
    }

    return (
        <main>
            <div className="form">
                <input type = "text" 
                    className="form--input" 
                    placeholder="Top text" />
                <input type = "text" 
                    className="form--inputs" 
                    placeholder="Bottom text" />
                <button onClick={handleClick} className="form--button"> 
                    Get a new image
                </button>
            </div>
            <img src= {meme.randomImage} className="meme--image"/>
        </main>
    )
}