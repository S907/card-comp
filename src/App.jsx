import { useState } from 'react'
import imageEqui from './assets/image-equilibrium.jpg';
import iconEth from './assets/icon-ethereum.svg'
import clock from './assets/icon-clock.svg'
import avatar from './assets/image-avatar.png'
import './App.css'
// import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import { AiOutlineEye } from "react-icons/ai";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="img-container">
          <img src={imageEqui} alt="image" loading='lazy' />
          <div className="overlay-container">
              <AiOutlineEye className='overlay-icon' />
          </div>
        </div>
        <div className="content">
          <h2 className='right-margin color-white'>Equilibrium #3429</h2>
          <p className='letter-space'>  Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="content-link">
            <div className="container-left">
              <img src={iconEth} alt="iconeth" className='img-margin' />
              <p className='cyan'>0.041 ETH</p>
            </div>
            <div className="container-right">
              <img src={clock} alt="" class='img-margin' />
              <p className='not-cy'>3 days left</p>
            </div>
          </div>
          {/* <hr /> */}
          <div className="footer">
            <img src={avatar} alt="" />
            <p>Creation of <span>Jules Wyvern</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
