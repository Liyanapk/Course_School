'use client';

import './Banner.css'
import Card from '../card/Card'
import { PiArrowRightThin } from "react-icons/pi";
import { PiArrowLeftThin } from "react-icons/pi";
import { useState } from 'react';


export default function Banner (){

    const [position, setPosition] = useState(0)
    


    const cards = [
        {
            title: 'React',
            description: 'Spken english dolor sit, amet consectetur.',
            image: '/images/card/card1.jpg'
        },
        {
            title:'English',
            description:'Spken english dolor sit, amet consectetur.',
            image:'/images/card/card1.jpg'
        },
        {
            title:'Education',
            description:'Eearning edu dolor sit, amet consectetur.',
            image:'/images/card/card1.jpg'
        },
        {
            title:'Education',
            description:'Lorem ipsum dolor sit, amet consectetur.',
            image:'/images/card/card1.jpg'
        }
        
    ];

    const visibleCard = cards.slice(position, position+3 )
    


    const moveRight = ()=> {
        if(position > 0 ){
            setPosition(position - 1)
        }
    }


    const moveLeft = ()=> {
        if(position + 3 < cards.length){
            setPosition(position + 1)
        }
    }

    return(
        <div className="banner-container">
            <div className="trophy-box">
                <p className="banner-box"> 🏆 The Leader in Online Learning</p>
            </div>
            <h1 className='banner-head'>We teaching, educate and<span className='banner-text-color'>build the future</span>of online learning </h1>
             
             <div  className='banner-card'>
             <PiArrowLeftThin className='banner-toggle-arrow' onClick={moveLeft}/> 
                
             
            {visibleCard.map((card,index)=>(
                <div key={index} className={`cards - ${index+1}`}  >
                    <Card 
                        title={card.title}
                        description={card.description}
                        image={card.image}
                    />

                </div>
            ))}   
                <PiArrowRightThin className='banner-toggle-arrow' onClick={moveRight} />
             </div>



           



             
        
        </div>

    )
}








{/* <div  className='banner-card2'>
<PiArrowLeftThin  onClick={moveLeft}/> 
   

       {visibleCardTwo.map((card,index)=>(
<div key={index} className={`cards - ${index+1}`} >
   <Card 
       title={card.title}
       description={card.description}
       image={card.image}
   />

</div>
))}
   <PiArrowRightThin onClick={moveRight} />
</div> */}