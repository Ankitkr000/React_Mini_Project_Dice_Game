import React from 'react'
import "./Homepage.css"

import dices from "../../assets/dices.png"
const Homepage = ({toggle}) => {

    return (
            <>
            <div className='big-div'>
                <div className='div1-img'>
                    <img src={dices} alt="" />
                 </div>

                <div className='div2-text'>
                    <div className='text-border'>
                        <h1>DICE GAME</h1>
                        <button
                        onClick={toggle}
                        
                        >Play Now</button>

                    </div>
                </div>
            </div>


            </>
  )
}

export default Homepage
