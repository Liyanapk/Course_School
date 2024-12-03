import './Banner.css'
import Card from '../card/Card'
import { title } from 'process'

export default function Banner (){

    return(
        <div className="banner-container">
            <div className="trophy-box">
                <p className="banner-box"> 🏆 The Leader in Online Learning</p>
            </div>
            <h1 className='banner-head'>We teaching, educate and<span className='banner-text-color'>build the future</span>of online learning </h1>
             
             <div className='banner-card'>
                <div className='card-1'>
                     <Card 
                      title='English'
                      description='Spken english dolor sit, amet consectetur.'
                      image='ff'
                      
                     />
                </div>
                <Card 
                      title='Education'
                      description='Eearning edu dolor sit, amet consectetur.'
                      image='ff'
                 />

                <Card 
                      title='Education'
                      description='Lorem ipsum dolor sit, amet consectetur.'
                      image='ff'
                 />
             </div>
        
        </div>

    )
}