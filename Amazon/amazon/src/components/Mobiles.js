import React from 'react'
import Leftpanel from './Leftpanel'
import Rightpanel from './Rightpanel'
import './Mobiles.css';

function Mobiles() {
  return (
    <div>
      <div className='mobiles'>
        <Leftpanel/>
        <Rightpanel/>
      </div>
    </div>
  )
}

export default Mobiles
