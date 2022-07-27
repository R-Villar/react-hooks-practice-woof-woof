import { useState } from "react"

function DogDetails({dog}) {
    const {name, image, isGoodDog} = dog

    const [good, setGood] = useState(isGoodDog)

    function dogClick() {
       setGood(good => !good)
    }

    return (
        <div id="dog-summary-container">
            <h1>DOGGO:</h1>
            <div id="dog-info">
                <img src={image} alt={name} />
                <h2>{name}</h2>
                <button onClick={dogClick}> {good ? "Good" : "Bad"} Dog!</button>
            </div>
        </div>
    )
}

export default DogDetails