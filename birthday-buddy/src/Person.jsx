// eslint-disable-next-line react/prop-types
const Person  = ({name,image,age}) =>{
    return(
        <article className="person">
            <img src={image} alt={name} className="img" />
            <div>
                <h3>{name}</h3>
                <p>{age} years</p>
            </div>
        </article>
    )
}

export default Person