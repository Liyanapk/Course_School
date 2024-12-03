
import React from 'react'
import './Card.css'
import { PiArrowRightThin } from "react-icons/pi";


interface cardProps {
    title : string,
    description : string,
    image: string
}

const Card: React.FC<cardProps> =({ title, description, image })=> {


    return(
        <div className='card-content'>
            
            <div className='card-items'>
                <h1 className='card-title'>{title}</h1>
                <p className='card-description'>{description}</p>
                <p className='card-learnmore'>Learn More  <PiArrowRightThin  className='card-arrow'/></p>
            </div>
            <img src={image} alt={title} className='card-image-container' /> 

        </div>
    )


}

export default Card