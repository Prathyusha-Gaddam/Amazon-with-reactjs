import React from 'react'
import './Mobiles.css';

function Leftpanel() {
  return (
    <div>
        <div className='leftpanel'>
            <h3>Brand</h3>
            <div class="labels">
                <label>
                    <input type="checkbox" value="Apple"/>Apple
                </label>
                <label>
                    <input type="checkbox" value="iphone"/>iphone
                </label>
                <label>
                    <input type="checkbox" value="Samsung"/>Samsung
                </label>
            </div>
        </div>
    </div>
  )
}

export default Leftpanel
