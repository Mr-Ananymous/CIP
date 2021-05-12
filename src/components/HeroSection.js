import '../App.css';
import {Button} from './Button'
import './HeroSection.css'

function HeroSection(){
  return(
    <div className='hero-container'>
           
        <h1> Get Your Code Instantly</h1>
        <p> ML Powered Tool to get What You want</p><br/>
      <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn-large'>
                
                About the Project      
            </Button>
      </div>
    </div>)

}

export default HeroSection;