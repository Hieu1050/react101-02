export default function Meme (){
    function handleClick (){
        
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