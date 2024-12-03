import { title } from 'process'
import React from 'react'
import './Card.css'


interface cardProps {
    title : string,
    description : string,
    image: string
}

const Card: React.FC<cardProps> =({ title, description, image })=> {


    return(
        <div className='card-content'>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <p>Learn More</p>
            </div>
            <img src={image} alt={title} /> 

        </div>
    )


}

export default Card