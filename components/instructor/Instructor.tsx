import './Instructor.css'
import { FaFacebookF } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";


export default function InstructorPage(){


    const cardData = [
        { name: 'Irma J. Erwin ' , subject:'English Teacher', image:'/images/card/course-image-02.png'},
        { name: 'John Due' , subject : 'English Teacher', image:'/images/card/course-image-02.png' },
        { name: 'Joo Bieden', subject : 'English Teacher', image:'/images/card/course-image-02.png' },
        { name: 'Alejandro', subject : 'English Teacher', image:'/images/card/course-image-02.png'}
    ]
    return(
        <div className='instructor-content'>
             <div className='instructor-head'>
                <button className='instructor-span'>OUR INSTRUCTOR</button>
                <h2 className='instructor-head'>Word Class Best Instructor</h2>
                <p className='instructor-para'>There are many variations of passages of the Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
             </div>
             <div className='card-grid'>
              {cardData.map((card)=>(
                <div className='instructor-card' key={card.name}>
                    <img src={card.image} alt={card.name} />
                     <div className='instructor-card-items'>
                        <div className='instructor-card-icons'>
                            <FaFacebookF />
                            <TiSocialLinkedin />
                            <TiSocialTwitter />

                        </div>
                     <div className='instructor-card-content'>
                        <h1>{card.name}</h1>
                        <p>{card.subject}</p>
                    </div>

                </div>
                
                </div>
               
              ))}
             </div>
        </div>
    )
}