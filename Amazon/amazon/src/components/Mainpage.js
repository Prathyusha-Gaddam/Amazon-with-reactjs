import React, { Component } from 'react'
import AdvertisementFour from './AdvertisementFour';
import AdvertisementOne from './AdvertisementOne';
import './Mainpage.css';

class Mainpage extends Component {
  render() {
    return (
      <div>
        <div className='MainPage' style={{'paddingTop':'200px','paddingLeft':'20px'}}>
            <AdvertisementOne/>
            <AdvertisementFour/>
            <AdvertisementOne/>
            <AdvertisementOne/>
            <AdvertisementOne/>
            <AdvertisementOne/>
        </div>
      </div>
    )
  }
}
export default Mainpage;