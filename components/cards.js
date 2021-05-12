import React from 'react'
import './cards.css'
import CardItem from './carditem';

function cards() {
    return (
        <div className='cards'>
            <h1>Instructions To Use the Tool</h1> <br/><br/>
            <div className="cards__container">
                <div classNam='cards__wrapper'>
                    <ul className="cards__item">
                        <CardItem 
                          src={process.env.PUBLIC_URL+'/images/images.jpg'}
                          text="Upload Your Design or Sketch"
                          Label="Step 1"
                        />
                        <CardItem 
                          src={process.env.PUBLIC_URL+'/images/images.jpg'}
                          text="Copy Your Code from the Textarea"
                          Label="Step 2"
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default cards

