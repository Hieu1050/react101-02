
import memesData from "../memesData"
export default function Meme (){
    function handleClick (){
        let data_len = memesData.data.memes.length;
        let random_image = memesData.data.memes[
            Math.floor (Math.random () * data_len)
        ];
        console.log (random_image.url);
    }

    return (
        <main>
            <form className="form">
                <input type = "text" 
                    className="form--input" 
                    placeholder="Top text" />
                <input type = "text" 
                    className="form--inputs" 
                    placeholder="Bottom text" />
                <button onClick={handleClick} className="form--button"> 
                    Get a new image
                </button>
            </form>
        </main>
    )
}