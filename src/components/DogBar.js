function DogBar({dogs, setSelectedDogiD }) {

    const dogObj = dogs.map((dog => (
         <span 
            key={dog.id} 
            onClick={() => setSelectedDogiD(dog)}>
            {dog.name}
        </span>
    )))

    return (
        <div id="dog-bar">{dogObj}</div>
    )
}

export default DogBar