import './Content.css'



export default function ContentSection (){

    return(

        <div className='content-section'>
            <div className='content-section-items'>
                <button className='popular-button'>POPULAR COURSE</button>
                <p className='content-title'>Online Coaching Lessons For Remote Learning</p>
                <div className='content-buttons'>
                    <button className='popular-item-buttons'>
                        All Course
                        <span className='badge'>12</span>
                    </button>
                    <button className='popular-item-buttons'>
                        Featured
                        <span className='badge'>04</span>
                    </button>
                    <button className='popular-item-buttons'>
                        Popular<span className='badge'>03</span>
                    </button>
                    <button className='popular-item-buttons'>
                        Treanding
                        <span className='badge'>03</span>
                    </button>
                    <button className='popular-item-buttons'>
                        Latest
                        <span className='badge'>02</span>
                    </button>
                </div>
            </div>
        </div>
    )
}